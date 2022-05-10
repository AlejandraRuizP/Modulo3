    function diaActual(){
    let fecha= new Date();
    let dia=fecha.getDay();//indice
    let dias={
        0: "Domingo",
        1: "Lunes",
        2: "Martes",
        3:"Miercoles",
        4:"Jueves",
        5:"Viernes",
        6:"Sabado"
    };//evalua valor del indice dentro del objeto
    let dActual= dias[dia];
    return dActual;
}
alert("Hoy es " +diaActual());




