window.addEventListener("scroll", ()=>
{

    //VAR FOR NAV
    const nav = document.querySelector("nav");
    const helloText = document.querySelector(".hello");
    let Y = window.scrollY;

    //VAR FOR PROGRESSION BAR
    let progress = document.querySelector(".progressionBar");
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progressionHeigh = (window.pageYOffset / totalHeight ) * 100;

    //ADD BACKGROUND TO NAV ABOVE 200PX
    if(Y > 300)
    {
        nav.classList.add("addBackground");
        helloText.style.display = "none";
    }
    else
    {
        nav.classList.remove("addBackground");
        helloText.style.display = "flex";
    }

    progress.style.height = progressionHeigh + "%";

    // console.log(progressionHeigh);
});



