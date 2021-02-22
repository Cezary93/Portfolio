const burger = document.querySelector(".burgerMenu");
const menuList = document.querySelector("nav ul");


burger.addEventListener("click", () =>
{
    burger.classList.toggle("openBurger");
    
    if(burger.classList.contains("openBurger"))
    {
        menuList.style.top = "0px";

        menuList.addEventListener("click", () =>
        {
            menuList.style.top = "-400px";
            burger.classList.remove("openBurger");
        });
    }
    else
    {
        menuList.style.top = "-400px";
    }



});