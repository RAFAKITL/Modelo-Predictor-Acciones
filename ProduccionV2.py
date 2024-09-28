#Produccion hasta los experimentos de STCorreccion.py

import pandas as pd
import numpy as np

from skforecast.ForecasterAutoreg import ForecasterAutoreg

from sklearn import preprocessing 
from sklearn.svm import SVR
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import BayesianRidge

def calcularSMA(datosEnDataFrame, cantidadDeDatos):
    sma_column_name = 'SMA_' + str(cantidadDeDatos)
    datosEnDataFrame[sma_column_name] = datosEnDataFrame['Close'].rolling(window=cantidadDeDatos).mean()
    datosEnDataFrame[sma_column_name] = datosEnDataFrame[sma_column_name].shift(1)  # Desplazar una fila hacia adelante
    return datosEnDataFrame
    
    
def calcularRSI(datosEnDataFrame, ventana):
    datosEnDataFrame['Close'] = pd.to_numeric(datosEnDataFrame['Close'], errors='coerce')
    cambios = datosEnDataFrame['Close'].diff()

    cambiosPositivos = cambios.clip(lower=0)
    cambiosNegativos = cambios.clip(upper=0)

    mediaMovilPositiva = cambiosPositivos.ewm(span=ventana, min_periods=ventana).mean()
    mediaMovilNegativa = cambiosNegativos.abs().ewm(span=ventana, min_periods=ventana).mean()

    RS = mediaMovilPositiva / mediaMovilNegativa
    RSI = 100 - (100 / (1 + (RS)))

    datosEnDataFrame['RSI'] = np.nan
    datosEnDataFrame['RSI'] = RSI.shift(1)  # Desplazar una fila hacia adelante
    return datosEnDataFrame

def calcularMomentum(datosEnDataframe, periodoDelMomentum):
    momentum_column_name = 'Momentum'
    datosEnDataframe[momentum_column_name] = datosEnDataframe['Adj Close'].pct_change(periodoDelMomentum)
    datosEnDataframe[momentum_column_name] = datosEnDataframe[momentum_column_name].shift(1)  # Desplazar una fila hacia adelante
    return datosEnDataframe

def integrarDatosTotales(dataframe):

    
    dataframeCompleto = calcularSMA(dataframe, 15)
    dataframeCompleto = calcularSMA(dataframe, 50)
    dataframeCompleto = calcularSMA(dataframe, 200)
    
    dataframeCompleto = calcularRSI(dataframe, 14)

    dataframeCompleto = calcularMomentum(dataframe, 10)

    return dataframeCompleto


def modeloSerieTemporal(dataframe, pasosPredecir):
    lags = 360
    tipoDeRegrecion = BayesianRidge(n_iter=300, tol=0.0001, alpha_1=0.000000001, alpha_2=.0001, lambda_1=.0001, lambda_2=0.000000001)
    original = dataframe
    dataframe["Date"] = pd.to_datetime(dataframe["Date"])
    dataframe = dataframe.set_index('Date')

    fechasiguiente = dataframe.index[-1] + pd.DateOffset(days=1)
    nuevoDia = pd.DataFrame({'Date': fechasiguiente, 'Close': 0}, index=[fechasiguiente])
    dataframe = pd.concat([dataframe, nuevoDia])

    dataframe = integrarDatosTotales(dataframe)

    dataframe = dataframe.asfreq('D').fillna(method='ffill')
    dataframe = dataframe.sort_index()

    Entrenamiento = dataframe[:-1]


    variablesExogenas = dataframe.loc[:, ['SMA_15', 'SMA_50','SMA_200', 'RSI', 'Momentum']]
    variablesExogenas.fillna(0, inplace=True)
    variablesExogenasEntrenamiento = variablesExogenas[:-1]

    Escalador = preprocessing.StandardScaler().fit(dataframe["Close"].values.reshape(-1, 1))

    modelo = ForecasterAutoreg(regressor = tipoDeRegrecion, lags = lags, transformer_y = Escalador)

    modelo.fit(y=Entrenamiento['Close'], exog=variablesExogenasEntrenamiento)
    prediccion = modelo.predict(steps=pasosPredecir, exog=variablesExogenas.iloc[-1:])

    print("===============================================================")
    print(f"Ultimo dato: {Entrenamiento.iloc[-1:]['Close']}")
    print(" ")
    print("=======================================================================================")
    print(f"Prediccion del dia siguiente: {prediccion}" )
    return Entrenamiento.iloc[-1:]['Close'], prediccion, original, dataframe

"""
dataframe = pd.read_csv("AccionesDatasets/NVDA.csv")
arboles = DecisionTreeRegressor(random_state=1)
SupportVectorMachines = SVR(epsilon=.000003)
Bayesiano = BayesianRidge()
modeloSerieTemporal(dataframe=dataframe, lags=5, tipoDeRegrecion=arboles, pasosPredecir=1)
modeloSerieTemporal(dataframe=dataframe, lags=5, tipoDeRegrecion=SupportVectorMachines, pasosPredecir=1)
modeloSerieTemporal(dataframe=dataframe, lags=5, tipoDeRegrecion=Bayesiano, pasosPredecir=1)
"""

