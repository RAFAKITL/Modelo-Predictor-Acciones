fetch('../static/datos.json')
    .then(Response => Response.json())
    .then(data => {
        const x = data.map(entry => entry.Date);
        const yVolatilidad = data.map(entry => entry['Retorno'])

        const layout = {
            title: 'Rentabilidad',
            xaxis: { title: 'Fecha'},
            yaxis: { title: 'Rentabilidad'},
            plot_bgcolor: '#011',
            paper_bgcolor: '#000',
            font: {
                color: '#fff'
            }
        };

        const traceVolatilidad = {
            x: x,
            y: yVolatilidad,
            mode: 'lines',
            type: 'scatter',
            name: 'Rentabilidad Diaria',
            line: {
                color: '#f00'
            }
        };

        const dataTraces = [traceVolatilidad]
        const config = {responsive: true};

        Plotly.newPlot('Rentabilidad', dataTraces, layout, config);
    })
    .catch(error => console.error('Error al cargar los datos', error));