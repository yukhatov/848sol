function contactUsFormHandler() {
    var formData = {
        'first_name'        : $('input[name=first_name]').val(),
        'last_name'         : $('input[name=last_name]').val(),
        'email'             : $('input[name=email]').val(),
        'phone'             : $('input[name=phone]').val(),
        'job'               : $('input[name=job]').val(),
        'company'           : $('input[name=company]').val(),
    };

    console.log(formData);

    // process the form
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : 'contact-us.php', // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode          : true
    })
    // using the done promise callback
        .done(function(data) {
        });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}