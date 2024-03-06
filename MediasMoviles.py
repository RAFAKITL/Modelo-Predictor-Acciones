import pandas as pd

def calcularSMA(datosEnDataFrame, cantidadDeDatos):
    datosEnDataFrame['SMA_' + str(cantidadDeDatos)] = datosEnDataFrame['Close'].rolling(window=cantidadDeDatos).mean()
    return datosEnDataFrame

def calcularRSI(datosEnDataFrame, ventana):
    datosEnDataFrame['Close'] = pd.to_numeric(datosEnDataFrame['Close'], errors='coerce')
    cambios = datosEnDataFrame['Close'].diff()

    cambiosPositivos = cambios.where(cambios > 0, 0)
    cambiosNegativos = cambios.where(cambios < 0, 0)

    mediaMovilPositiva = cambiosPositivos.ewm(span=ventana, min_periods=ventana).mean()
    mediaMovilNegativa = cambiosNegativos.ewm(span=ventana, min_periods=ventana).mean()

    RS = mediaMovilPositiva/mediaMovilNegativa
    RSI = 100 - (100/(1+(RS)))

    datosEnDataFrame['RSI'] = RSI

    return datosEnDataFrame