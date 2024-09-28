import os
import pandas as pd
import json
from flask import Flask, render_template, jsonify
import subprocess
from ProduccionV2 import modeloSerieTemporal  # Asegúrate de importar correctamente tu función
from flask import Flask, render_template, request
import csv
from listToPandas import listToArreglo, arreglosToPandas
from MediasMoviles import calcularSMA, calcularRSI
import pandas as pd
import matplotlib.pyplot as plt 
from AprendizajeAutomatico import prediccionArbolesDecision
from AprendizajeAutomatico import prediccionSVM


app = Flask(__name__)
ACCIONES_FOLDER = 'Modelo-Predictor-Acciones\static\Acciones'

def ejecutar_descarga():
    # Ejecutar el script de descarga
    subprocess.run(["python", "Modelo-Predictor-Acciones\DescargaArchivos.py"], check=True)

@app.route('/')
def procesar():

    ejecutar_descarga()
    archivos = [f for f in os.listdir(ACCIONES_FOLDER) if f.endswith('.csv')]
    archivos.sort()
    resultados = []

    acciones = ["AAPL", "AZN", "BBVA", "BIMBOA.MX", "C", "CEMEXCPO.MX", "CVX", "NVDA", "KOFUBL.MX", "TSLA"]
    contadorAcción = 0
    for archivo in archivos:
        ruta_archivo = os.path.join(ACCIONES_FOLDER, archivo)
        rutaJSON = "Modelo-Predictor-Acciones\static\AccionesJSON\datos" + acciones[contadorAcción] + ".json"
        df = pd.read_csv(ruta_archivo, parse_dates=['Date'], dayfirst=True)  # Leer el CSV como DataFrame de pandas
        
        # Procesar el archivo usando modeloSerieTemporal
        ultimo_cierre, prediccion, serie_original, serie_modificada = modeloSerieTemporal(df, 1)
        df.to_json(rutaJSON, orient = 'records', date_format='iso')

        if prediccion.values[0] > ultimo_cierre.values[0]:
            verde = True
        else:
            verde = False
            
        # Almacenar los resultados
        resultados.append({
            'archivo': archivo,
            'ultimo_cierre': ultimo_cierre.values[0],
            'prediccion': prediccion.values[0],
            'serie_original': serie_original,  # Convertir series a listas para JSON
            'serie_modificada': serie_modificada,
            'sube': verde
        })
        contadorAcción +=1
    
    # Pasar los resultados al template
    return render_template('index.html', resultados=resultados)

if __name__ == '__main__':
    app.run(debug=True)
