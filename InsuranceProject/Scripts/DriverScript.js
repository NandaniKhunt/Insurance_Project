
$(document).ready(function () {
    LoadStates();
    debugger;
    var firstName = sessionStorage.getItem('FirstName');
    console.log(firstName);
    var lastName = sessionStorage.getItem('LastName');
    console.log(lastName);
    debugger;
    if (firstName) {
        $('#txtfnm').val(firstName);
    }
    if (lastName) {
        $('#txtlnm').val(lastName);
    }

    debugger;
    $('#btngender .btn').click(function () {
        var btnvalue = $(this).val();
        console.log(btnvalue);
        $('#btngen').val(btnvalue);
    });
    debugger;
    $('#btnsatus .btn').click(function () {
        var btnval = $(this).val();
        console.log(btnval);
        $('#btnmrg').val(btnval);
    });
    $('#dpstate').change(function () {
        $('#txtno').val('');
    });
    debugger;
    function LoadStates() {
        $.getJSON('/Driver/GetState', function (data) {
            var dpstate = $('#dpstate');
            debugger;
            dpstate.empty();
            $('#dpstate').empty().append('<option value="">--Select--</option>');
            debugger;
            $.each(data, function (index, item) {
                dpstate.append($('<option>', { value: item, text: item }));
            });
        });
    }
    debugger;
    function validateLicenseNo(state, licenseNo) {
        var isValid = false;
        var message = '';
        debugger;
        console.log(state);
        console.log(licenseNo);
        debugger;
        switch (state) {
            case 'Gujarat':
                isValid = /^[A-Za-z]{2}\d{8}$/.test(licenseNo);
                message = '2 alphabets 8 numbers for Gujarat';
                break;
            case 'Punjab':
                isValid = /^[A-Za-z]{2}\d{5}$/.test(licenseNo);
                message = '2 alphabets 5 numbers for Punjab';
                break;
            case 'Bihar':
                isValid = /^[A-Za-z]{2}\d{3}$/.test(licenseNo);
                message = '2 alphabets 8 numbers for Bihar';
                break;
            case 'Haryana':
                isValid = /^[A-Za-z]{2}\d{5}$/.test(licenseNo);
                message = '2 alphabets 5 numbers for Haryana';
                break;
            case 'Rajasthan':
                isValid = /^[A-Za-z]{2}\d{4}$/.test(licenseNo);
                message = '2 alphabets 4 numbers for Rajasthan';
                break;
            case 'Chhattisgarh':
                isValid = /^[A-Za-z]{2}\d{7}$/.test(licenseNo);
                message = '2 alphabets 7 numbers for Chhattisgarh';
                break;
            default:
                isValid = false;
                message = 'No validation';
                break;
        }
        return { isValid: isValid, message: message };
    }
    debugger;
    $('#btnsubmit').click(function (e) {
        e.preventDefault();
        var state = $('#dpstate').val();
        var LicenseNo = $('#txtno').val();
        var Status = $('#dpstatus').val();
        var DOB = $('#txtdate').val();
        var FirstName = $('#txtfnm').val();
        var LastName = $('#txtlnm').val();
        var Gender = $('#btngen').val();
        var MaritalStatus = $('#btnmrg').val();
        var HomeType = $('#dphome').val();
        var HomeSType = $('#dphometype').val();
        var Education = $('#dpedu').val();
        var Occupation = $('#dpocc').val();
        debugger;
        if (state && LicenseNo && Status && DOB && Gender && MaritalStatus && HomeType && HomeSType && Education && Occupation) {
            debugger;
            var result = validateLicenseNo(state, LicenseNo);
            debugger;
            console.log(result);
            debugger;
            if (result.isValid) {
                $.post('/Driver/Add', {
                    StateName: state,
                    LicenseNo: LicenseNo,
                    Status: Status,
                    DOB: DOB,
                    FirstName: FirstName,
                    LastName: LastName,
                    Gender: Gender,
                    MaritalStatus: MaritalStatus,
                    HomeType: HomeType,
                    HomeStatusType: HomeSType,
                    Education: Education,
                    Occupation: Occupation
                }, function (response) {
                    console.log(response);
                    alert('Inserted successfully');
                    debugger;
                    $('#dpstate').val('');
                    $('#txtno').val('');
                    $('#dpstatus').val('');
                    $('#txtdate').val('');
                    $('#txtfnm').val('');
                    $('#txtlnm').val('');
                    $('#btngen').val('');
                    $('#btnmrg').val('');
                    $('#dphome').val('');
                    $('#dphometype').val('');
                    $('#dpedu').val('');
                    $('#dpocc').val('');
                });
            } else {
                alert(result.message);
            }
        } else {
            alert('Please fill all fields..');
        }
    });

    debugger;
    var savedData = [];
    debugger;
    function ShowDriver() {
        var driverDiv = $('#savedata');
        console.log(driverDiv);
        driverDiv.empty();
        if (savedData.length > 0) {
            savedData.forEach(function (driver, index) {
                driverDiv.append(`
                <div class="mb-2">
                    <button class="btn btn-outline-info btn-sm" data-index="${index}">
                        ${driver.FirstName},${driver.LastName}
                    </button>
                </div>
            `);
            });
            debugger;
            driverDiv.find('button').click(function () {
                var index = $(this).data('index');
                var driver = savedData[index];
                console.log(index);
                console.log(driver);
                debugger;
                $('#dpstate').val(driver.state);
                $('#txtno').val(driver.LicenseNo);
                $('#dpstatus').val(driver.Status);
                $('#txtdate').val(driver.DOB);
                $('#txtfnm').val(driver.FirstName);
                $('#txtlnm').val(driver.LastName);
                $('#btngen').val(driver.Gender);
                $('#btnmrg').val(driver.MaritalStatus);
                $('#dphome').val(driver.HomeType);
                $('#dphometype').val(driver.HomeSType);
                $('#dpedu').val(driver.Education);
                $('#dpocc').val(driver.Occupation);
            });
        }
    }
    debugger;
    $('#btnsave').click(function (e) {
        e.preventDefault();
        var state = $('#dpstate').val();
        var LicenseNo = $('#txtno').val();
        var Status = $('#dpstatus').val();
        var DOB = $('#txtdate').val();
        var FirstName = $('#txtfnm').val();
        var LastName = $('#txtlnm').val();
        var Gender = $('#btngen').val();
        var MaritalStatus = $('#btnmrg').val();
        var HomeType = $('#dphome').val();
        var HomeSType = $('#dphometype').val();
        var Education = $('#dpedu').val();
        var Occupation = $('#dpocc').val();
        debugger;
        if (state && LicenseNo && Status && DOB && Gender && MaritalStatus && HomeType && HomeSType && Education && Occupation) {
            debugger;
            var result = validateLicenseNo(state, LicenseNo);
            debugger;
            console.log(result);
            debugger;
            if (result.isValid) {
                $.post('/Driver/Add', {
                    StateName: state,
                    LicenseNo: LicenseNo,
                    Status: Status,
                    DOB: DOB,
                    FirstName: FirstName,
                    LastName: LastName,
                    Gender: Gender,
                    MaritalStatus: MaritalStatus,
                    HomeType: HomeType,
                    HomeStatusType: HomeSType,
                    Education: Education,
                    Occupation: Occupation
                }, function (response) {
                    console.log(response);
                    alert('Inserted successfully');

                    savedData.push({ state, LicenseNo, Status, DOB, FirstName, LastName, Gender, MaritalStatus, HomeType, HomeSType, Education, Occupation});
                    console.log(savedData);

                     $('#dpstate').val('');
                     $('#txtno').val('');
                     $('#dpstatus').val('');
                     $('#txtdate').val('');
                     $('#txtfnm').val('');
                     $('#txtlnm').val('');
                     $('#btngen').val('');
                     $('#btnmrg').val('');
                     $('#dphome').val('');
                     $('#dphometype').val('');
                     $('#dpedu').val('');
                     $('#dpocc').val('');
                    debugger;
                    ShowDriver();
                });
            } else {
                alert(result.message);
            }
        } else {
            alert('Please fill all fields..');
        }
    });





















});


