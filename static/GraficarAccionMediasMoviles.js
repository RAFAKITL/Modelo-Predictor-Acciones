//Fetch se usa para obtener los datos con los que trabajara el script
fetch('../static/AccionesJSON/datosBBVA.json')
    .then(Response => Response.json())
    .then(data => { //Comenzamos la asignacion de datos

        const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
        const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close
        /*
        const ySMA = dataata.map(entry => entry['SMA_200']) //Otro de los trazos en y contendra la media movil a largo plazo
        */

        //Aqui designamos la disposicion y lo que contendra en general el grafico
        const layout = {
            title: 'BBVA', //Titulo del grafico
            xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
            yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
            plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
            paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
            font: {
                color: '#fff' //Color de las letras del grafico
            }
        };
        
        const traceClose = { //Aqui se definen los datos de uno de los trazos
            x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
            y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
            mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
            type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
            name: 'Cierre' //Se define el nombre del trazo
        };

        /*
        const traceSMA = { //Aqui se definen los datos del trazo de las medias moviles
            x: x, //El eje x seguira mostrando los datos con respecto a las fechas
            y: ySMA, //El eje y sera designado por la media movil simple que se ha calculado
            mode: 'lines', // El modo de graficacion de los datos de la media movil sera en modo de lineas
            type: 'scatter', //El tipo de graficacion sera de dispersion 
            name: 'Media movil 100', //El nombre del trazo sera este
            line: {
                color: '#ff0' //Se define un color distinto de linea para que sea distinguible
            }
        };*/

        const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
        const configResponsive = {responsive: true}; //Se asigna que el grafico sea responsivo
        const configNoResponsive = {responsive: false};

        //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
        Plotly.newPlot('BBVAGrafico', dataTraces, layout, {responsive: false}); 
        Plotly.newPlot('BBVAGraficoGrande', dataTraces, layout, configResponsive);
    })
    .catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola



fetch('../static/AccionesJSON/datosNVDA.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'NVDA', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('NVDAGrafico', dataTraces, layout, config); 
    Plotly.newPlot('NVDAGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola




fetch('../static/AccionesJSON/datosAAPL.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'APPLE', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('AAPLGrafico', dataTraces, layout, config); 
    Plotly.newPlot('AAPLGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola



fetch('../static/AccionesJSON/datosAZN.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'ASTRAZENECA', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('AZNGrafico', dataTraces, layout, config); 
    Plotly.newPlot('AZNGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola





fetch('../static/AccionesJSON/datosBIMBOA.MX.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'BIMBO', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('BIMBOA.MXGrafico', dataTraces, layout, config); 
    Plotly.newPlot('BIMBOA.MXGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola





fetch('../static/AccionesJSON/datosC.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'CITI', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('CGrafico', dataTraces, layout, config); 
    Plotly.newPlot('CGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola





fetch('../static/AccionesJSON/datosCEMEXCPO.MX.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'CEMEX', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('CEMEXCPO.MXGrafico', dataTraces, layout, config); 
    Plotly.newPlot('CEMEXCPO.MXGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola




fetch('../static/AccionesJSON/datosCVX.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'CHEVRON', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('CVXGrafico', dataTraces, layout, config); 
    Plotly.newPlot('CVXGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola




fetch('../static/AccionesJSON/datosKOFUBL.MX.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'FEMSA', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('KOFUBL.MXGrafico', dataTraces, layout, config); 
    Plotly.newPlot('KOFUBL.MXGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola




fetch('../static/AccionesJSON/datosTSLA.json')
.then(Response => Response.json())
.then(data => { //Comenzamos la asignacion de datos
    

    const x = data.map(entry => entry.Date); //Nuestro eje x contendra los datos de la fecha Date
    const yClose = data.map(entry => entry.Close); //Uno de los trazos en el eje y contendra los precios de cierre Close

    const layout = {
        title: 'TESLA', //Titulo del grafico
        xaxis: { title: 'Fecha'}, //Titulo del eje x del grafico
        yaxis: { title: 'Valor'}, //Titulo del eje y del grafico
        plot_bgcolor: '#011', //Color del area donde estara el grafico, la cuadricula por así decirlo
        paper_bgcolor: '#000', //Color del papel tapiz por así decirlo del grafico, la base donde se colocara la cuadricula
        font: {
            color: '#fff' //Color de las letras del grafico
        }
    };


    const traceClose = { //Aqui se definen los datos de uno de los trazos
        x: x, //Como varible x del trazo se pasa la misma variable x definida en un inicio
        y: yClose, //Como variable y de este trazo se pasa la variable del cierre (yClose)
        mode: 'lines', //Se designa el modo de graficacion del dato para que sean lineas
        type: 'scatter', //Se define el tipo de grafica del dato como grafica de dispersion
        name: 'Cierre' //Se define el nombre del trazo
    };


    const dataTraces = [traceClose] //Ambas constantes que contienen los datos sobre la graficacion de los trazos se guardan como un arreglo
    const config = {responsive: true}; //Se asigna que el grafico sea responsivo
    
    //Se crea el grafico tomando en cuenta todos los datos anteriormente definidos y se asigna al espacio en el html que tenga el nombre de Grafico
    Plotly.newPlot('TSLAGrafico', dataTraces, layout, config); 
    Plotly.newPlot('TSLAGraficoGrande', dataTraces, layout, config);
})
.catch(error => console.error('Error al cargar los datos', error)); //Si se produce un error al cargar los datos este sera visible en la consola


