function btnClick() {
    var mailingAddressFields = document.getElementById('mailingAddressFields');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    var isAddressVisible = mailingAddressFields.style.display === 'block';
    if (isAddressVisible) {
        mailingAddressFields.style.display = 'none';
        yesButton.disabled = true;
        noButton.disabled = false;
    } else {
        mailingAddressFields.style.display = 'block';
        yesButton.disabled = false;
        noButton.disabled = true;
    }
}
$(document).ready(function () {

    var today = new Date().toISOString().split('T')[0];
    document.getElementById('txtdate').value = today;

    $('#txtzip').on('change', function () {
        var zipcode = $(this).val();
        if (zipcode.length === 5) {
            var url = "https://zip.getziptastic.com/v3/US/" + zipcode;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                headers: {
                    "x-key": "f2d7bddc854769a205d78b819559c8deab586084"
                },
                success: function (data) {
                    console.log(data)

                    if (data[0].city && data[0].state) {
                       debugger;
                        $('#txtcity').val(data[0].city);
                        $('#txtstate').val(data[0].state);
                    } else {
                        //debugger;
                        alert('Invalid zipcode!');
                        $('#txtcity').val('');
                        $('#txtstate').val('');
                    }
                },
                error: function () {
                    alert('Errorrr!!!!!!!!!!!!!!!');
                    $('#txtcity').val('');
                    $('#txtstate').val('');
                }
            });
        }
    });
    $('#txtmailzip').on('change', function () {
        var zipcode = $(this).val();
        if (zipcode.length === 5) {
            var url = "https://zip.getziptastic.com/v3/US/" + zipcode;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                headers: {
                    "x-key": "f2d7bddc854769a205d78b819559c8deab586084"
                },
                success: function (data) {
                    console.log(data)
                    //  debugger;
                    if (data[0].city && data[0].state) {
                        //debugger;
                        $('#txtmailcity').val(data[0].city);
                        $('#txtmailstate').val(data[0].state);
                    } else {
                        // debugger;
                        alert('Invalid zipcode!');
                        $('#txtmailcity').val('');
                        $('#txtmailstate').val('');
                    }
                },
                error: function () {
                    alert('Errorrr!!!!!!!!!!!!!!!');
                    $('#txtmailcity').val('');
                    $('#txtmailstate').val('');
                }
            });
        }
    });
    debugger;
        $('#btndata').click(function (e) {
            e.preventDefault();
            debugger;
            var EffectiveDate = $('#txtdate').val();
            var FirstName = $('#txtfnm').val();
            var LastName = $('#txtlnm').val();
            var Email = $('#txtemail').val();
            var PhoneNo = $('#txtpno').val();
            var GaragingAddress = $('#txtgadd').val();
            var ApartmentAddress = $('#txtapart').val();
            var Zipcode = $('#txtzip').val();
            var City = $('#txtcity').val();
            var State = $('#txtstate').val();
         
            var MailingAddress = $('input[name="mailingAddress"]:checked').val();
            var MailAddress = $('#txtmailgadd').val();
            var MailApartment = $('#txtmailapart').val();
            var MailZipcode = $('#txtmailzip').val();
            var Mailcity = $('#txtmailcity').val();
            var MailState = $('#txtmailstate').val();
            debugger;
            if (EffectiveDate && FirstName && LastName && Email && PhoneNo && GaragingAddress && Zipcode) {
                $.post('/Applicant/Add', {
                    EffectiveDate: EffectiveDate,
                    FirstName: FirstName,
                    LastName: LastName,
                    Email: Email,
                    PhoneNo: PhoneNo,
                    GaragingAddress: GaragingAddress,
                    ApartmentAddress: ApartmentAddress,
                    Zipcode: Zipcode,
                    City: City,
                    State: State,
                    MailAddress: MailAddress,
                    MailApartment: MailApartment,
                    MailZipcode: MailZipcode,
                    Mailcity: Mailcity,
                    MailState: MailState
                }, function (response) {
                    debugger;
                    console.log(response);
                    alert('Inserted successfully');
                    debugger;
                    sessionStorage.setItem('FirstName', FirstName);
                    sessionStorage.setItem('LastName', LastName);
                    debugger;           
                    window.location.href = '/Vehical/Add';
                    
                    debugger;
                });
            } else {
                alert('Not Inserted..');
            }
        });
});

