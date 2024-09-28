from flask import Flask, render_template, request
import csv
from PromedioGlobalClose import promediar
from listToPandas import listToArreglo, arreglosToPandas
from MediasMoviles import calcularSMA, calcularRSI, calcularVolatilidad, calcularMomentum
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

        Fecha = listToArreglo(csv_data, 0, False)
        Apertura = listToArreglo(csv_data, 1, True)
        Alto = listToArreglo(csv_data, 2, True)
        Bajo = listToArreglo(csv_data, 3, True)
        Cierre = listToArreglo(csv_data, 4, True)
        AdjCierre = listToArreglo(csv_data, 5, True)
        Volumen = listToArreglo(csv_data, 6, True)

        dataInPandas = arreglosToPandas(Fecha, Apertura, Alto, Bajo, Cierre, AdjCierre, Volumen)
        MediaSMA = calcularSMA(dataInPandas, 200)
        datosConRSI = calcularRSI(MediaSMA, 14)
        datosConVolatilidad, volatilidadAnualizada = calcularVolatilidad(datosConRSI)
        datosConMomentum = calcularMomentum(datosConVolatilidad, 10)
        datosConMomentum.to_json('Modelo-Predictor-Acciones\static\datos.json', orient = 'records')

        # Realizar operaciones con los datos CSV aquí
        return render_template('result.html', csv_data=csv_data)

if __name__ == '__main__':
    app.run(debug=True)
