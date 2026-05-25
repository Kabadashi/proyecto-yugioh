
function cambiarTema(){

    document.body.classList.toggle("claro");

}


window.onload = function(){

    alert("Bienvenido al Universo Yu-Gi-Oh!");

}


const formulario = document.getElementById("formulario");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;

        const correo = document.getElementById("correo").value;

        const mensaje = document.getElementById("mensaje").value;

        const resultado = document.getElementById("resultado");

        if(nombre === "" || correo === "" || mensaje === ""){

            resultado.innerHTML = "Complete todos los campos";

        }else{

            resultado.innerHTML = "Formulario enviado correctamente";

        }

    });

}