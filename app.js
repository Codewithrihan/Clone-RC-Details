//front Side Items Value
var fullname = document.getElementById("fullname");
var fname = document.getElementById("dor");
var dob = document.getElementById("rv");
var dob = document.getElementById("os");
var phone = document.getElementById("Chassis");
var email = document.getElementById("Engine");
var add = document.getElementById("Owner");
var exp = document.getElementById("swd");
var hobbies = document.getElementById("Ownership");
var Marital_Status = document.getElementById("Address");
var Marital_Status = document.getElementById("Address2");
var Marital_Status = document.getElementById("Fuel");
var Marital_Status = document.getElementById("Norms");


//Back Side Items Value
var Vehicle_class = document.getElementById("Vehicle_Class");
var Regn_No = document.getElementById("Regn_Number");
var Makers_Name = document.getElementById("Makers_Name");
var Model_Name = document.getElementById("Model_Name");
var Colour = document.getElementById("Colour");
var Body_Type = document.getElementById("Body_Type");
var Seating = document.getElementById("Seating");
var Unladen = document.getElementById("Unladen");
var Laden = document.getElementById("Laden");
var Cubic = document.getElementById("Cubic");
var Horse_Power = document.getElementById("Horse_Power");
var Wheel_Base = document.getElementById("Wheel_Base");
var Mfg = document.getElementById("mfg");
var Cylinders = document.getElementById("Cylinders");
var Financier = document.getElementById("");
var Registration_Authority = document.getElementById("Authority");



//image section 
function addWaterMark(doc) {
    var totalPages = doc.internal.getNumberOfPages();
    var image = new Image();
    var image2 = new Image()
    var image3 = new Image()
    image.src = 'img-1.png';
    image2.src = 'img-2.png';
    image3.src = 'img-3.png';
    for (i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.addImage(image, 'PNG', 10, 10, 190, 125);
      doc.addImage(image2, 'PNG', 10, 150, 190, 125);
      doc.addImage(image3, 'PNG', 15, 183, 50, 50);
      doc.setTextColor(150);
      doc.text(50, doc.internal.pageSize.height - 30, '');
    }
  
    return doc;
  }

//download Button 
function download() {
    var doc = new jsPDF({
        orientation: 'p',
        format: 'a4',
    });

    


    //front side materail 
    doc = addWaterMark(doc);
    doc.addFont("Arimo-Regular.ttf", "Arimo", "normal");
    doc.addFont("Arimo-Bold.ttf", "Arimo", "bold");
    doc.setFont("Arimo");
    doc.setFontType("normal");
    doc.setFontSize(12.86);
    doc.setFontType("bold");
    doc.setTextColor(0, 0, 0);
    doc.text(53.2, 40.4, 'Regn No ');
    doc.text(87.9, 40.4, 'Date of Regn.  ' );
    doc.text(122, 40.4, 'Regn. Validity  ' );
    doc.text(157, 40.4, 'Owner \nSerial  ' );
    doc.text(53.2, 52, 'Chassis No  ' );
    doc.text(53.2, 63, 'Engine/Motor No  ' );
    doc.text(53.2, 74, 'Owner Name  ' );
    doc.text(53.2, 85, 'Son/Wife/Daughter of (In case of Individual Owner)  ' );
    doc.text(53.2, 96, 'Ownership  ' );
    doc.text(53.2, 107, 'Address  ' );
    doc.text(15, 112.2, 'Fuel  ' );
    doc.text(15, 122.2, 'Emission Norms  ' );

    //bold text 
    doc.setFontSize(12.86);
    doc.setFontType("bold");
    doc.setTextColor(0, 0, 0);
    doc.text(53.2, 45.5, fullname.value);
    doc.text(87.8, 45.5, dor.value);
    doc.text(122, 45.5, rv.value);
    doc.text(15, 181.5, Regn_Number.value);

     //unbold text
    doc.setFontSize(12.86);
    doc.setFontType("normal");
    doc.setTextColor(0, 0, 0);
    doc.text(53.2, 57.5, Chassis.value);
    doc.text(53.2, 68.5, Engine.value);
    doc.text(53.2, 79.5, Owner.value);
    doc.text(53.2, 90.5, swd.value);
    doc.text(53.2, 101.5, Ownership.value);
    doc.text(53.2, 112.5, Address.value);
    doc.text(53.2, 117.5, Address2.value);
    doc.text(15, 117.5, Fuel.value);
    doc.text(15, 127.5, Norms.value);
    doc.text(176, 42.4, os.value);
    
    //defult bold text
    doc.setFontSize(14.5);
    doc.setFontType("bold");
    doc.text(50.3, 19.7, 'Indian Union Vehicle Registration Certificate \nIssued by GOVERNMET OF RAJASTHAN');


    //back side materail
    doc.setFontSize(12.86);
    doc.setFontType("bold");
    doc.setTextColor(0, 0, 0);
    doc.text(68.5, 163, 'Vehicle Class: ');
    doc.text(15, 176.5, 'Regn. Number ');
    doc.text(68.5, 177.5, 'Makers Name:');
    doc.text(68.5, 188.5, 'Model Name:');
    doc.text(68.5, 199.5, 'Colour:');
    doc.text(130, 199.5, '/ Body Type:');
    doc.text(68.5, 210.5, 'Seating(in all) Capacity');
    doc.text(68.5, 221.5, 'Unladen/ Laden Weight (Kg)');
    doc.text(68.5, 232.5, 'Cubic Cap./ Horse Power (BHP/Kw) / Wheel Base(mm)');
    doc.text(15, 241.5, 'Month-Year of Mfg.');
    doc.text(15, 251.5, 'No. of Cylinders');

    //unbold defualt
    doc.setFontSize(12.86);
    doc.setFontType("normal");
    doc.setTextColor(0, 0, 0);
    doc.text(153, 258, "Registration Authority");
    
    //unbold text
    doc.text(97.5, 163, Vehicle_Class.value);
    doc.text(68.5, 182.5, Makers_Name.value);
    doc.text(68.5, 193.5, Model_Name.value);
    doc.text(68.5, 204.5, Colour.value);
    doc.text(131.5, 204.5, Body_Type.value);
    doc.text(68.5, 215.5, Seating.value);
    doc.text(69.5, 226.5, Unladen.value);
    doc.text(86.5, 226.5,  Laden.value);
    doc.text(68.5, 237.5,  Cubic.value);
    doc.text(92, 237.5,  Horse_Power.value);
    doc.text(143, 237.5,  Wheel_Base.value);
    doc.text(15, 246.5, mfg.value);
    doc.text(48, 251.5, Cylinders.value);
    doc.text(136.5, 263.5, Authority.value);

    //defult unblod text
    doc.setFontSize(14.5);
    doc.setFontType("Normal");
    doc.text(84, 226.5, '/');
    doc.text(90, 237.5, '/');
    doc.text(141, 237.5, '/');
    doc.text(129, 204.5, '/');

    // Save the PDF
    doc.save('document.pdf');

}


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

