window.addEventListener("scroll", ()=>
{

    //VAR FOR NAV
    const nav = document.querySelector("nav");
    let Y = window.scrollY;

    //VAR FOR PROGRESSION BAR
    let progress = document.querySelector(".progressionBar");
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progressionHeigh = (window.pageYOffset / totalHeight ) * 100;

    //ADD BACKGROUND TO NAV ABOVE 200PX
    if(Y > 200)
    {
        nav.classList.add("addBackground");
    }
    else
    {
        nav.classList.remove("addBackground");
    }

    progress.style.height = progressionHeigh + "%";

    // console.log(progressionHeigh);
});



