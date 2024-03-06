import pandas as pd
from sklearn.tree import DecisionTreeRegressor
from sklearn.svm import SVR

def dividirDatos(dataframe):
    cantidadDatosEntrenamiento = int(len(dataframe) * 70)
    cantidadDatosExamen = int(len(dataframe) * 30)

    DatosEntrenamiento = dataframe.sample(cantidadDatosEntrenamiento)
    DatosExamen = dataframe.sample(cantidadDatosExamen)

def prediccionArbolesDecision(dataframe, valorApertura):
    """
    dataframe["Date"] = pd.to_datetime(dataframe["Date"])
    dataframe["Date"] = dataframe["Date"].dt.year
    """
    X = dataframe["Open"].values.reshape(-1, 1)
    y = dataframe["Close"].values.reshape(-1, 1)

    modelo = DecisionTreeRegressor()
    modelo.fit(X, y)

    precioPredicho = modelo.predict([[valorApertura]])

    return precioPredicho

def prediccionSVM(dataframe, valorApertura):
    X = dataframe["Open"].values.reshape(-1, 1)
    y = dataframe["Close"].values.reshape(-1, 1)

    modelo = SVR()
    modelo.fit(X, y)

    precioPredicho = modelo.predict([[valorApertura]])
    
    return precioPredicho


    
