$(document).ready(function(){

    // To close Alert
    $("#alert-close").click(() => {
        $('#alert').fadeOut("slow");
    });

    // To post form data to firebase
    $('#contact-form').submit((e) => {
        e.preventDefault();
    
        var first_name = $('#grid-first-name').val();
        var last_name = $('#grid-last-name').val();
        var email = $('#grid-email').val();
        var text = $('#grid-text').val();
        
        $.ajax({
            method: 'POST',
            url: 'https://us-central1-my-portfolio-b1b64.cloudfunctions.net/helloWorld/',
            data: {
                first_name:first_name, 
                last_name: last_name,
                email: email,
                text: text
            }
        }).done(() => {
            $('#contact-form').trigger("reset");
            $('#alert').show();
        });
    });
});