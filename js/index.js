

import dataProductos from './../data/productos.json' assert {type: 'json'};

const $buttonClose = document.getElementById("button-close");
const $menuMobile = document.getElementById("menu-mobile");
const $iconMenuMobile = document.getElementById("icon-menu-mobile");
const $products = document.getElementById("products");

const $templateProducto = document.getElementById("fragment-producto").content;
const $fragmento = document.createDocumentFragment();




$buttonClose.addEventListener("click", ()=>{

    $menuMobile.classList.remove("menu--active")

} )

$iconMenuMobile.addEventListener("click", ()=>{

    $menuMobile.classList.add("menu--active")

})

$menuMobile.addEventListener("click",()=>{
    
    $menuMobile.classList.remove("menu--active")


})


const main = ()=>{

    const {productos} = dataProductos; 

    productos.forEach( producto => {

        let $nombre = $templateProducto.querySelector(".products__item__title")

        $nombre.textContent= producto.nombre;

        let $imagen = $templateProducto.querySelector(".products__item__image__img")

        $imagen.setAttribute("src",producto.imagen)

        let $caracteristicas = $templateProducto.querySelectorAll(".characteristics__value")

        $caracteristicas.forEach( (caracteristica,index) =>{

            caracteristica.textContent = producto.caracteristicas[index].descripcion;
            
        })


        let $clone = document.importNode($templateProducto,true)

        $fragmento.append($clone)
    })


    $products.appendChild($fragmento)

}


main();





