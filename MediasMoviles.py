import pandas as pd
import numpy as np

def calcularSMA(datosEnDataFrame, cantidadDeDatos):
    datosEnDataFrame['SMA_' + str(cantidadDeDatos)] = datosEnDataFrame['Close'].rolling(window=cantidadDeDatos).mean()
    return datosEnDataFrame

def calcularRSI(datosEnDataFrame, ventana):
    datosEnDataFrame['Close'] = pd.to_numeric(datosEnDataFrame['Close'], errors='coerce')
    cambios = datosEnDataFrame['Close'].diff()

    cambiosPositivos = cambios.clip(lower=0)
    cambiosNegativos = cambios.clip(upper=0)

    mediaMovilPositiva = cambiosPositivos.ewm(span=ventana, min_periods=ventana).mean()
    mediaMovilNegativa = cambiosNegativos.abs().ewm(span=ventana, min_periods=ventana).mean()

    RS = mediaMovilPositiva/mediaMovilNegativa
    RSI = 100 - (100/(1+(RS)))

    datosEnDataFrame['RSI'] = RSI

    return datosEnDataFrame

def calcularVolatilidad(datosEnDataframe):
    datosEnDataframe['Retorno'] = 100*datosEnDataframe['Close'].pct_change()

    volatilidadDiaria = datosEnDataframe['Retorno'].std()

    volatilidadAnualizada = volatilidadDiaria * np.sqrt(365)

    return datosEnDataframe, volatilidadAnualizada

def calcularMomentum(datosEnDataframe, periodoDelMomentum):
    datosEnDataframe['Momentum'] = datosEnDataframe['Adj Close'].pct_change(periodoDelMomentum)

    return datosEnDataframe

    