
const $buttonClose = document.getElementById("button-close");
const $menuMobile = document.getElementById("menu-mobile");
const $iconMenuMobile = document.getElementById("icon-menu-mobile");


$buttonClose.addEventListener("click", ()=>{

    $menuMobile.classList.remove("menu--active")

} )

$iconMenuMobile.addEventListener("click", ()=>{

    $menuMobile.classList.add("menu--active")

})

$menuMobile.addEventListener("click",()=>{
    
    $menuMobile.classList.remove("menu--active")


})

console.log($buttonClose)