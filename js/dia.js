var dias=document.getElementById("diaNumero");
var DomMensaje = document.getElementById('DomMensaje');
var divMensaje=document.createElement('div');

diasDelaSemana=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function DiasSemanales(){
    DomMensaje.appendChild(divMensaje);
    divMensaje.classList.add('alert','alert-success','alert-dismissible','fade','show','h5');
    divMensaje.setAttribute('role','alert');
    if(diasDelaSemana[dias.value-1] === undefined) {
        divMensaje.innerHTML='EL valor ingresado no corresponde al número de la semana';
    }else{
        divMensaje.innerHTML= `El número ${dias.value} corresponde al día  ${diasDelaSemana[dias.value-1]}`
    }
}