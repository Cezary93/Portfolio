const firstName = document.querySelector("#firstName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("form");
// const submit = document.querySelector("button['submit']")
const formInfo = document.querySelector(".formInfo");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();

    checkInputs();


});

function checkInputs()
{
    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(firstNameValue === "")
    {
        //show error 
        //add error class
        setErrorFor(firstName, "To pole nie może być puste")
    }
    else
    {
        //add success class
        setSuccessFor(firstName); 
    }

    if(emailValue === "")
    {
        setErrorFor(email, "To pole nie może być puste")
    }
    else if(!isEmail(emailValue))
    {
        setErrorFor(email, "Adres jest niepoprawny")
    }
    else
    {
        setSuccessFor(email);
    }

    if(messageValue === "")
    {
        setErrorFor(message, "To pole nie może być puste")
    }
    else
    {
        setSuccessFor(message);
    }


}

function setErrorFor(input, text)
{
    const formGroup = input.parentElement; //.formGroup
    const small = formGroup.querySelector("small");

    small.innerText = text;
    formGroup.className = "formGroup error";
}

function setSuccessFor(input, text)
{
    const formGroup = input.parentElement; //.formGroup
    const small = formGroup.querySelector("small");

    formGroup.className = "formGroup success";
}

function isEmail(email)
{
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

