fetch('../static/datos.json')
    .then(Response => Response.json())
    .then(data => {
        const x = data.map(entry => entry.Date);
        const yClose = data.map(entry => entry.Close);
        const ySMA = data.map(entry => entry['SMA_100'])
        const yRSI = data.map(entry => entry['RSI'])

        const layout = {
            title: 'Cierre y Media Movil 100',
            xaxis: { title: 'Fecha'},
            yaxis: { title: 'Valor'},
            plot_bgcolor: '#011',
            paper_bgcolor: '#000',
            font: {
                color: '#fff'
            }
        };

        const traceClose = {
            x: x,
            y: yClose,
            mode: 'markers',
            type: 'scatter',
            name: 'Close'
        };

        const traceSMA = {
            x: x,
            y: ySMA,
            mode: 'lines',
            type: 'scatter',
            name: 'Media movil 100',
            line: {
                color: '#ff0'
            }
        };

        const traceRSI = {
            x: x,
            y: yRSI,
            mode: 'lines',
            type: 'scatter',
            name: 'RSI 100',
            line: {
                color: '#af0'
            }
        };

        const dataTraces = [traceClose, traceSMA]
        const config = {responsive: true};

        Plotly.newPlot('Grafico', dataTraces, layout, config);
    })
    .catch(error => console.error('Error al cargar los datos', error));