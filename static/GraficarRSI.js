fetch('../static/datos.json')
    .then(Response => Response.json())
    .then(data => {
        const x = data.map(entry => entry.Date);
        const yRSI = data.map(entry => entry['RSI'])

        const layout = {
            title: 'Indice de fuerza relativo',
            xaxis: { title: 'Fecha'},
            yaxis: { title: 'RSI'},
            plot_bgcolor: '#011',
            paper_bgcolor: '#000',
            font: {
                color: '#fff'
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

        const dataTraces = [traceRSI]
        const config = {responsive: true};

        Plotly.newPlot('GraficoRSI', dataTraces, layout, config);
    })
    .catch(error => console.error('Error al cargar los datos', error));