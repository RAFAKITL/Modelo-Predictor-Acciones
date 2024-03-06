import matplotlib.pyplot as plt
import pandas as pd

def generarGrafico(data):
    data['Date'] = pd.to_datetime(data['Date'])
    data = data.sort_values(by='Date')
    data.set_index('Date', inplace=True)

    plt.figure(figsize=(10, 6))
    plt.plot(data['Close'], label='Conjunto de Datos Original')

    plt.title('Conjunto de Datos')
    plt.xlabel('Fecha')
    plt.ylabel('Valor')
    plt.legend()
    plt.grid(False)

    plt.savefig('static/bar_chart.png')
    plt.close()

    return 'bar_chart.png'
