// function sendMail(params)
// {
//     var tempParams = {
//         from_name: document.querySelector("#firstName").value,
//         from_email: document.querySelector("#email").value,
//         message: document.querySelector("#message").value,
//     };


//     emailjs.send("contact_service", "template_krm01pc", tempParams)
//     .then(function(res)
//     {
//         console.log("success", res.status);
//     });
// }


window.onload = function() {
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // const firstName = document.querySelector("#firstName");
        // const email = document.querySelector("#email");
        // const message = document.querySelector("#message");
        // const form = document.querySelector("form");
        // const formInfo = document.querySelector(".formInfo");

        // if(firstName.value === "")
        // {
        //     console.log("błąd");
        // }
        // else
        // {
        //     console.log("ok");
        // }

        emailjs.sendForm('contact_service', 'template_krm01pc', this)
            .then(function() {
                console.log('SUCCESS!');
                console.log(this);
            }, function(error) {
                console.log('FAILED...', error);
            });
        

    });


}