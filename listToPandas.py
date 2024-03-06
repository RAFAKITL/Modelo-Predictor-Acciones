import pandas as pd


def listToArreglo(Lista, columnaIndex):
    arregloColumna = []
    for row in Lista[1:]:
        arregloColumna.append(row[columnaIndex])

    return arregloColumna


def arreglosToPandas(Date, Open, High, Low, Close, AdjClose, Volume):
    datosSinOrg = {'Date': Date, 'Open': Open, 'High': High, 'Low': Low, 'Close': Close, 'Adj Close': AdjClose, 'Volume': Volume}
    dataFrame = pd.DataFrame(datosSinOrg)

    return dataFrame
