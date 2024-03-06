import csv, matplotlib as plt

def promediar(datos):
    columnaClose = 4
    arregloDeClose =[row[columnaClose] for row in datos[1:]]
    datosClose = [float(x) for x in arregloDeClose]
    numeroDatos = len(datosClose)

    promedio = sum(datosClose)/numeroDatos

    return promedio

