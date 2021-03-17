window.onload = function() {

    
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let result = checkInputs();

        console.log(result);

        if(result===true)
            emailjs.sendForm('contact_service', 'template_krm01pc', this)
            .then(function() {
                console.log('SUCCESS!');
                console.log(this);
            }, function(error) {
                console.log('FAILED...', error);

                //FORM RESET_______________________________________
                //reset fields
                form.reset();

                //remove success class
                formGroup.forEach(function(item)
                {
                item.classList.remove("success");
                });
                                            
                //change button text
                submit.textContent = "Wiadomość została wysłana";
                submit.classList.add("submited"); 
        });

    });

        function checkInputs()
        {
            const firstName = document.querySelector("#firstName");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");
            const form = document.querySelector("form");
            const submit = document.querySelector("button[type='submit']")
            const formInfo = document.querySelector(".formInfo");

            const firstNameValue = firstName.value.trim();
            const emailValue = email.value.trim();
            const messageValue = message.value.trim();
            const formGroup = document.querySelectorAll(".formGroup");
            let count = 0;
            let result;

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
                count++;
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
                count++;
            }

            if(messageValue === "")
            {
                setErrorFor(message, "To pole nie może być puste")
            }
            else
            {
                setSuccessFor(message);
                count++;
            }

            console.log(count);

            // if there are 3 correct fields then send true and change button text
            if(count === 3)
            {
                //change button text
                submit.textContent = "Wiadomość została wysłana";
                submit.classList.add("submited"); 
                submit.disabled = true;

                result = true;
            }

            return result;
            
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
    
}



