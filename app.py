from flask import Flask, render_template, request
import csv
from PromedioGlobalClose import promediar
from Graficar import generarGrafico
from listToPandas import listToArreglo, arreglosToPandas
from MediasMoviles import calcularSMA, calcularRSI
import pandas as pd
import matplotlib.pyplot as plt 
from AprendizajeAutomatico import prediccionArbolesDecision
from AprendizajeAutomatico import prediccionSVM

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'No se ha proporcionado ningún archivo'

    file = request.files['file']
    if file.filename == '':
        return 'No se ha seleccionado ningún archivo'

    if file:
        data = file.read().decode('utf-8').splitlines()
        csv_data = list(csv.reader(data))

        Fecha = listToArreglo(csv_data, 0)
        Apertura = listToArreglo(csv_data, 1)
        Alto = listToArreglo(csv_data, 2)
        Bajo = listToArreglo(csv_data, 3)
        Cierre = listToArreglo(csv_data, 4)
        AdjCierre = listToArreglo(csv_data, 5)
        Volumen = listToArreglo(csv_data, 6)

        dataInPandas = arreglosToPandas(Fecha, Apertura, Alto, Bajo, Cierre, AdjCierre, Volumen)
        MediaSMA = calcularSMA(dataInPandas, 100)
        datosConRSI = calcularRSI(MediaSMA, 100)
        datosConRSI.to_json('.\static\datos.json', orient = 'records')

        # Realizar operaciones con los datos CSV aquí
        return render_template('result.html', csv_data=csv_data)

if __name__ == '__main__':
    app.run(debug=True)
