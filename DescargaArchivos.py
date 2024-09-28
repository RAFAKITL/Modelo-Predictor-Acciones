import requests
import os
import time

# Diccionario de símbolos de acciones con sus fechas de inicio correspondientes
symbols = {
    'BBVA': '1988-12-15',   # Fecha de inicio para BBVA
    'NVDA': '1999-01-22',
    'AAPL': '1980-12-12',   # Fecha de inicio para Apple
    'AZN': '1993-05-12',  
    'KOFUBL.MX': '2019-04-11',
    'BIMBOA.MX': '2000-01-03',
    'TSLA':'2010-01-29',
    'C': '1977-01-03',
    'CVX': '1970-01-02',
    'CEMEXCPO.MX': '2000-01-03'
    # Agrega más símbolos y fechas de inicio según sea necesario
}

# Obtener el timestamp Unix para la fecha actual
end_date = int(time.time())

# Directorio donde se guardarán los archivos descargados
download_dir = 'Modelo-Predictor-Acciones\static\Acciones'
os.makedirs(download_dir, exist_ok=True)

# Headers para imitar un navegador web
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# Función para convertir una fecha a timestamp Unix
def convert_to_timestamp(date_str):
    date_struct = time.strptime(date_str, '%Y-%m-%d')
    return int(time.mktime(date_struct))

# Función para descargar un archivo
def download_file(url, save_path):
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Asegurarse de que la solicitud fue exitosa
        
        # Verificar si el archivo ya existe y sobrescribirlo si es necesario
        if os.path.exists(save_path):
            print(f'El archivo {save_path} ya existe. Sobrescribiendo...')
        
        with open(save_path, 'wb') as file:
            file.write(response.content)
        print(f'Archivo descargado y guardado en {save_path}')
    except requests.exceptions.RequestException as e:
        print(f'Error al descargar el archivo: {e}')

# Recorrer cada símbolo y descargar los datos históricos
for symbol, start_date_str in symbols.items():
    print(f'Revisando datos para {symbol}...')
    start_date = convert_to_timestamp(start_date_str)
    url = f'https://query1.finance.yahoo.com/v7/finance/download/{symbol}?period1={start_date}&period2={end_date}&interval=1d&events=history&includeAdjustedClose=true'
    print(f'URL generada: {url}')
    
    # Nombre del archivo para guardar
    file_extension = '.csv'
    save_path = os.path.join(download_dir, f'{symbol}{file_extension}')
    
    print(f'Descargando datos históricos de {symbol}...')
    download_file(url, save_path)
    print(f'Descargas completadas para {symbol}')

print('Todas las descargas han finalizado.')
