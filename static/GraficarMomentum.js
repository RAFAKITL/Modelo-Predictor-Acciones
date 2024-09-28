fetch('../static/datos.json')
    .then(Response => Response.json())
    .then(data => {
        const x = data.map(entry => entry.Date);
        const yMomentum = data.map(entry => entry['Momentum'])

        const layout = {
            title: 'Momentum',
            xaxis: { title: 'Fecha'},
            yaxis: { title: 'Momentum'},
            plot_bgcolor: '#011',
            paper_bgcolor: '#000',
            font: {
                color: '#fff'
            }
        };

        const traceMomentum = {
            x: x,
            y: yMomentum,
            mode: 'lines',
            type: 'scatter',
            name: 'Momentum',
            line: {
                color: '#f0f'
            }
        };

        const dataTraces = [traceMomentum]
        const config = {responsive: true};

        Plotly.newPlot('Momentum', dataTraces, layout, config);
    })
    .catch(error => console.error('Error al cargar los datos', error));