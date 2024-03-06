const archivo = document.getElementById('file');
const MensajeConfirmacion = document.getElementById('MensajeConfirmatorio');


MensajeConfirmacion.style.display = 'none';

archivo.addEventListener('change', function(){
    if (archivo.files.length)
    {
        MensajeConfirmacion.style.display = 'block';
    }
    else
    {
        MensajeConfirmacion.style.display = 'none';
    }
});