// Function to generate UUID
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

$(document).ready(function(){

    // To close Alert
    $("#alert-close").click(() => {
        $('#alert').fadeOut("slow");
    });

    // To post form data to DynamoDB
    $('#contact-form').submit((e) => {
        e.preventDefault();
    
        /*var first_name = $('#grid-first-name').val();
        var last_name = $('#grid-last-name').val();
        var email = $('#grid-email').val();
        var message = $('#grid-text').val();*/

        $.ajax({
            method: 'POST',
            url: 'https://q07ay8y6jc.execute-api.ap-south-1.amazonaws.com/prod/contact-form/',
            headers: {
                "Content-Type":"application/json"
            },
            data: JSON.stringify({
                id: create_UUID(),
                timestamp: Math.floor(Date.now() / 1000),
                first_name: $('#grid-first-name').val(), 
                last_name: $('#grid-last-name').val(),
                email: $('#grid-email').val(),
                message: $('#grid-text').val()
            })
        })
        .done(() => {
            $('#contact-form').trigger("reset");
            $('#alert').addClass('bg-green-100 border-green-400');
            $('#alert-text').html('<b class="capitalize">Yayyy !!</b> Your message has been sent.');
            $('#alert').show();
        })
        .fail(() => {
            $('#alert').addClass('bg-red-100 border-red-400');
            $('#alert-text').html('<b class="capitalize">Uhh Ohh !!</b> Looks like error occurred.');
            $('#alert').show();
      })
    });
});