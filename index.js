let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', 
    loop: true, 
    navigation: {          
        nextEl: ".swiper-button-next",          
        prevEl: ".swiper-button-prev",        
    }
});

var constraints = {
    ccn: {
        presence: true,
        format: {
            pattern: /[0-9]{16}/,
            message: "Please enter a 16-digit credit card number."
        }
    },
    cvv: {
        presence: true,
        format: {
            pattern: /[0-9]{3}/,
            message: "Please enter a 3-digit CVV."
        }
    }
};

var paymentForm = document.getElementById('payment-info');
paymentForm.addEventListener('submit', function (event) {
    var formData = {
        ccn: $('#ccn').val(),
        cvv: $('#cvv').val()
    };

    var errors = validate(formData, constraints);

    if (errors) {
        event.preventDefault();
        console.log(errors);
        }
    });





