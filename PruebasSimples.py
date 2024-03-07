import pandas as pd #Libreria pandas, para tratamiento de dataframes
import numpy as np #Libreria para desarrollos matematicos
import matplotlib.pyplot as plt #Libreria para realizar graficos
from sklearn.tree import DecisionTreeRegressor #Libreria para el algoritmo de Arboles de desicion
from sklearn.svm import SVR #Libreria para Support Vector Machines
from sklearn.linear_model import LogisticRegression #Libreria para Regresión Logistica
from sklearn.model_selection import train_test_split #Libreria para realizar la separacion de datos de prueba
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error #Librerias para la realizacion de la evaluacion de los algoritmos


#Funcion encargada de realizar la prediccion por medio del algoritmo de arboles de desicion
def prediccionArbolesDecision(dataframe): 

    #Se extraen los datos necesarios del dataframe, y se les aplica una simple conversión
    X = dataframe["Open"].values.reshape(-1, 1) 
    y = dataframe["Close"].values.reshape(-1, 1)


    #Se divide el conjuntos de datos disponibles en aquellos de entrenamiento y prueba, X son las variables independientes del modelo y Y las variables dependientes (O a predecir) se dividen en un factor de 3/7
    XEntrenamiento, XPrueba, YEntrenamiento, YPrueba = train_test_split(X, y,  test_size=.3)


    #Se crea el modelo de arboles de desición, por ahora no se ha decidido cambiar ningun parametro de los que tenemos por defecto
    modelo = DecisionTreeRegressor()

    #Se entrena el modelo con los datos de entrenamiento tanto las variables independientes como las variables a predecir
    modelo.fit(XEntrenamiento, YEntrenamiento)

    #Realizamos las predicciones en el conjunto de datos de prueba
    precioPredicho = modelo.predict(XPrueba)

    #Bloque dedicado a la obtencion de aquellos parametros de evaluacion del algoritmo
    ErrorCuadraticoMedio = mean_squared_error(YPrueba, precioPredicho)
    raizErrorCuadraticoMedio = np.sqrt(ErrorCuadraticoMedio)
    coeficienteCorrelacion = r2_score(YPrueba, precioPredicho)
    ErrorMedioAbsoluto = mean_absolute_error(YPrueba, precioPredicho)


    #Simples impresiones de los parametros de evaluacion
    print(" ")
    print("Error cuadratico medio de los arboles= ", ErrorCuadraticoMedio)
    print("Raiz del error cuadratico medio de los arboles= ", raizErrorCuadraticoMedio)
    print("Coeficiente de correlacion de los arboles= ", coeficienteCorrelacion)
    print("Error Medio Absoluto de de los arboles= ", ErrorMedioAbsoluto)
    print(" ")


    #En caso de necesitarlo vamos a devolver el modelo ya entrenado
    return modelo


#Funcion encargada de realizar la prediccion por medio del algoritmo de Support Vector Machines
def prediccionSVM(dataframe):

    #Se extraen los datos necesarios del dataframe, y se les aplica una simple conversión
    X = dataframe["Open"].values.reshape(-1, 1)
    y = dataframe["Close"].values.reshape(-1, 1)

    #Se divide el conjuntos de datos disponibles en aquellos de entrenamiento y prueba, X son las variables independientes del modelo y Y las variables dependientes (O a predecir) se dividen en un factor de 3/7
    XEntrenamiento, XPrueba, YEntrenamiento, YPrueba = train_test_split(X, y,  test_size=.3)

    #Se crea el modelo de SVM, por ahora no se ha decidido cambiar ningun parametro de los que tenemos por defecto
    modelo = SVR()

    #Se entrena el modelo con los datos de entrenamiento tanto las variables independientes como las variables a predecir
    modelo.fit(XEntrenamiento, YEntrenamiento)

    #Realizamos las predicciones en el conjunto de datos de prueba

    #Bloque dedicado a la obtencion de aquellos parametros de evaluacion del algoritmo
    precioPredicho = modelo.predict(XPrueba) 
    ErrorCuadraticoMedio = mean_squared_error(YPrueba, precioPredicho)
    raizErrorCuadraticoMedio = np.sqrt(ErrorCuadraticoMedio)
    coeficienteCorrelacion = r2_score(YPrueba, precioPredicho)
    ErrorMedioAbsoluto = mean_absolute_error(YPrueba, precioPredicho)

    #Simples impresiones de los parametros de evaluacion
    print(" ")
    print("Error cuadratico medio del SVM= ", ErrorCuadraticoMedio)
    print("Raiz del error cuadratico medio del SVM= ", raizErrorCuadraticoMedio)
    print("Coeficiente de correlacion del SVM= ", coeficienteCorrelacion)
    print("Error Medio Absoluto del SVM= ", ErrorMedioAbsoluto)
    print(" ")

    return modelo


dataframeAPPLE = pd.read_csv("AAPL.csv")
prediccionSVM(dataframeAPPLE)
prediccionArbolesDecision(dataframeAPPLE)

dataframeBBVA = pd.read_csv("BBVA.csv")
prediccionSVM(dataframeBBVA)
prediccionArbolesDecision(dataframeBBVA)

dataframeNVIDIA = pd.read_csv("NVDA.csv")
prediccionSVM(dataframeNVIDIA)
prediccionArbolesDecision(dataframeNVIDIA)
