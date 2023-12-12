$(documnet).ready(function() {

    form.validate({

        rules: {
    
           phone    : {matches:"[0-9]+",minlength:10, maxlength:10
        }
    }
    });
    
    $('.zip').click(function () {
        var zip = $('.zip').val();
    
      if (zip == ''){
            errorMessage = "*Zipcode required!";
        }
        else if ((zip.length)< 6 || (zip.length)>6 ){
            errorMessage = "*zipcode should only be 6 digits";
        }
        
        
      });
    
    //   const myModal = document.getElementById('myModal')
    // const myInput = document.getElementById('myInput')
    
    // myModal.addEventListener('shown.bs.modal', () => {
    //   myInput.focus()
    // })
});