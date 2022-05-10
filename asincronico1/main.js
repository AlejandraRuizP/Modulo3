class Libro{
    constructor(nombreLibro, autor, editorial, genero){
        this.nombreLibro=nombreLibro,
        this.autor= autor,
        this.editorial= editorial,
        this.genero= genero
    }
}

let libro1= new Libro("La casa", "Charo Ruano", "Amarante", "Poesía");
let libro2= new Libro("Germánico", "Francisco Mañas", "amarante", "Novela histórica");
let libro3= new Libro("El alfabeto alado", "Mario Satz", "Acantilado", "Cuento");
//---------------
let libros=[];
libros.push(libro1 , libro2, libro3);
console.log(libros);

let $texto=document.querySelector("#autor");
let $button=document.querySelector("#button");
//------evento
$button.addEventListener("click", function filtrarAutor(){

    if($texto.value == "mario" || $texto.value=="mario Satz"){

        let h5=document.createElement("h5");
        h5.innerHTML= "Mario Satz es autor del libro: "+ libros[2].nombreLibro;
        document.body.appendChild(h5);
        $texto.value=""; 

    } else if($texto.value=="charo" || $texto.value=="charo ruano"){

        let h5=document.createElement("h5");
        h5.innerHTML= "Charo Ruano es autor del libro: "+ libros[0].nombreLibro;
        document.body.appendChild(h5);
        $texto.value=""; 

    } else if($texto.value=="francisco" || $texto.value=="francisco mañas"){

        let h5=document.createElement("h5");
        h5.innerHTML= "Francisco Mañas es autor del libro: "+ libros[1].nombreLibro;
        document.body.appendChild(h5);
        $texto.value=""; 
    }else{
        let h5=document.createElement("h5");
        h5.innerHTML= "Ups! No tengo ese dato";
        document.body.appendChild(h5);
        $texto.value=""; 

    }
    return $texto;

});

