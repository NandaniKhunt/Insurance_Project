$(function () {
    var startYear = new Date().getFullYear();
    for (var year = startYear -20; year <= startYear; year++) {
        $('#ddlyear').append('<option value="' + year + '">' + year + '</option>');
    }
     debugger;
    $('#txtvin').on('change', function () {
        var vin = $(this).val();
        if (vin) {
            $.ajax({
                url: '/Vehical/GetVehicleDetailsByVin',
                type: 'GET',
                data: { vin: vin },
                success: function (response) {
                    if (response) {
                         debugger;
                        console.log(response);
                        $('#ddlyear').val(response.Year);
                        $('#dpmake').html('<option value="' + response.Make + '">' + response.Make + '</option>');
                        $('#dpmodel').html('<option value="' + response.Model + '">' + response.Model + '</option>');

                    } else {
                        alert('Vehicle details not found... ');
                    }
                },
                error: function () {
                    alert('Errorr....');
                }
            });
        }
    });
    //debugger;
    $('#ddlyear').change(function () {
        var year = $(this).val();
        $('#txtvin').val('');
        if (year) {
            $.getJSON('/Vehical/GetMake', { year: year }, function (data) {
                // debugger;
                console.log(data);
                $('#dpmake').empty().append('<option value="">---Select Make---</option>');
                $('#dpmodel').empty().append('<option value="">---Select Model---</option>');

                $.each(data, function (index, item) {
                    // debugger;
                    console.log(item);
                    $('#dpmake').append($('<option>', { value: item, text: item }));
                });
            });
        } else {
            $('#dpmake').empty().append('<option value="">---Select Make---</option>');
            $('#dpmodel').empty().append('<option value="">---Select Model---</option>');
        }
    });
    // debugger;
    $('#dpmake').change(function () {
        var year = $('#ddlyear').val();
        var make = $(this).val();
        // debugger;
        if (year && make) {
            $.getJSON('/Vehical/GetModels', { year: year, make: make }, function (data) {
                console.log(data);
                //  debugger;
                $('#dpmodel').empty().append('<option value="">---Select Model---</option>');
                $.each(data, function (index, item) {
                    //debugger;
                    console.log(item);
                    $('#dpmodel').append($('<option>', { value: item, text: item }));
                });
            });
        } else {
            $('#dpmodel').empty().append('<option value="">---Select Model---</option>');
        }
    });
    //debugger;
    $('#dpmodel').change(function () {
        var year = $('#ddlyear').val();
        var make = $('#dpmake').val();
        var model = $(this).val();
        //debugger;
        if (year && make && model) {
            $.getJSON('/Vehical/GetVin', { year: year, make: make, model: model }, function (data) {
                // debugger;
                console.log(data);
                $('#txtvin').val(data);
            });
        } else {
            $('#txtvin').val('');
        }
    });
    debugger;
    $('.btn-group .btn').click(function () {
        var btnvalue = $(this).val();
        $('#btnuse').val(btnvalue);
    });
    debugger;
    $('#submitBtn').click(function (e) {
        e.preventDefault();
        var year = $('#ddlyear').val();
        var make = $('#dpmake').val();
        var model = $('#dpmodel').val();
        var vin = $('#txtvin').val();
        var Ownership = $('#dpown').val();
        var vehicleUse = $('#btnuse').val();
        debugger;
        if (year && make && model && vin && Ownership && vehicleUse) {
            $.post('/Vehical/Add', {
                VIN: vin,
                Year: year,
                Make: make,
                Model: model,
                Ownership: Ownership,
                vehicleUse: vehicleUse,
            }, function (response) {
                debugger;
                console.log(response);
                alert('Inserted successfully');
                window.location.href = '/Driver/Add';
            });
        } else {
            alert('Not Inserted.......');
        }
    });
    debugger;
    var savedData = [];
    debugger;
    function Showvehicle() {
        var vehicleDiv = $('#savedata');
        console.log(vehicleDiv);
        debugger;
        vehicleDiv.empty();
        if (savedData.length > 0) {
            savedData.forEach(function (vehicle, index) {
                console.log(vehicle);
                console.log(index);
                debugger;
                vehicleDiv.append(`
                <div class="mb-2">
                    <button class="btn btn-outline-info btn-sm" data-index="${index}">
                        ${vehicle.year},${vehicle.make},${vehicle.model}
                    </button>
                </div>
            `);
            });
            debugger;
                vehicleDiv.find('button').click(function () {
                    var index = $(this).data('index');
                    var vehicle = savedData[index];
                    debugger;
                    console.log(index);
                    console.log(vehicle);
                    debugger;
                    $('#ddlyear').val(vehicle.year);
                    $('#dpmake').val(vehicle.make);
                    $('#dpmodel').val(vehicle.model);
                    $('#txtvin').val(vehicle.vin);
                    $('#dpown').val(vehicle.Ownership);
                    $('#btnuse').val(vehicle.vehicleUse);
            });
        }
    }
    debugger;
    $('#btnAdd').click(function (e) {
        e.preventDefault();
        var year = $('#ddlyear').val();
        var make = $('#dpmake').val();
        var model = $('#dpmodel').val();
        var vin = $('#txtvin').val();
        var Ownership = $('#dpown').val();
        var vehicleUse = $('#btnuse').val();
        debugger;
        if (year && make && model && vin && Ownership && vehicleUse) {
            $.post('/Vehical/Add', {
                VIN: vin,
                Year: year,
                Make: make,
                Model: model,
                Ownership: Ownership,
                vehicleUse: vehicleUse
            }, function (response) {
                debugger;
                console.log(response);
                alert('Inserted successfully');

                savedData.push({ year, make, model, vin, Ownership, vehicleUse });
                console.log(savedData);

                $('#ddlyear').val('');
                $('#dpmake').val('');
                $('#dpmodel').val('');
                $('#txtvin').val('');
                $('#dpown').val('');
                $('#btnuse').val('');
                debugger;
                Showvehicle();
            });
        }
        else {
            alert('Not Inserted...');
        }
    }); 
});
       

               
         
        
   



