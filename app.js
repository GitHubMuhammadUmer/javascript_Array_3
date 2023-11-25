                      // _________________ Array Ch#13-15____________________



// ------------- Question No.1-------------------

// var student = [];


// ------------- Question No.2-------------------

// var student = [Muhammad,Umer,Maaz,Saad,Umair,Ahmed];


// ------------- Question No.3-------------------

// var stringsArray =["Muhammad","Umer","Iqbal"];


// ------------- Question No.4-------------------

// var numbersArray = [12,334,52];


// ------------- Question No.5-------------------

// var booleanArray = [true,false];


// ------------- Question No.6-------------------

// var mixedArray = ["Muhammad Umer" , 10 ,true ,false];


// ------------- Question No.7-------------------

// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("<h1>Qualifications<h1/> <br/>");
// document.write("1)" + "  " + educationQualifications[0] + "<br/>" + 
//  "2)" + "  " + educationQualifications[1] + "<br/>" +
//  "3)" + "  " + educationQualifications[2] + "<br/>" +
//  "4)" + "  " + educationQualifications[3] + "<br/>" +
//  "5)" + "  " + educationQualifications[4] + "<br/>" +
//  "6)" + "  " + educationQualifications[5] + "<br/>" +
//  "7)" + "  " + educationQualifications[6] + "<br/>" +
//  "8)" + "  " + educationQualifications[7] + "<br/>" );


// ------------- Question No.8-------------------

// var studentNames = ["Umer" , "Umair" ,"Zain"];
// var studentScore = [440, 300 , 380 ];
// var totalMarks = 500;
// document.write("Score of" + " " + studentNames[0] + " " + "is" + " " +  studentScore[0] + "." + " " + "Percentages:" + " " + (studentScore[0]*100)/totalMarks + "%" + "<br/>" + 
// "Score of" + " " + studentNames[1] + " " + "is" + " " +  studentScore[1] + "." + " " + "Percentages:" + " " + (studentScore[1]*100)/totalMarks + "%"  +"<br/>"+
// "Score of" + " " + studentNames[2] + " " + "is" + " " +  studentScore[2] + "." + " " + "Percentages:" + " " + (studentScore[2]*100)/totalMarks + "% " + "<br/>" );


// ------------- Question No.9-------------------

// var color = ["Red","Black","White","Yellow"];
// document.write(color + "<br/>"  + "<br/>");


// ------------- Question No.9a-------------------

// var UserColor = prompt("Enter a color you wants to add to the beginning");
// color.unshift(UserColor);
// document.write("Updated Array:"+ " " +color);


// ------------- Question No.9b-------------------

// var UserColor = prompt("Enter a color you wants to add to the end");
// color.push(UserColor);
// document.write("Updated Array:"+ " " +color);


// ------------- Question No.9c-------------------

// var UserColor = prompt("Enter a first color you wants to add to the beginning");
// color.unshift(UserColor);
// var UserColor = prompt("Enter a second color you wants to add to the beginning");
// color.unshift(UserColor);
// document.write("Updated Array:"+ " " +color);


// ------------- Question No.9d-------------------

// var color = ["Red","Black","White","Yellow"];
// color.shift(color);
// document.write("Updated Array:"+ " " +color);

// ------------- Question No.9f-------------------

// var color = ["Red","Black","White","Yellow"];
// color.pop(color);
// document.write("Updated Array:"+ " " +color);


// ------------- Question No.9g-------------------

// var deleteIndex = prompt("Enter a index you wants to delete color(s)");
// var deleteColorCount = prompt("Enter a how many you wants to delete color(s)");
// color.splice(deleteIndex,deleteColorCount);
// document.write("Updated Array:"+ " " +color);



// ------------- Question No.10-------------------


// var storeStudent = [722, 933, 332, 445, 155];
// document.write("Score Of Student:" + " " + storeStudent + "<br/>" +
//     "Order Score Of Student:" + " " + storeStudent.sort());



// ------------- Question No.11-------------------


// var cityNames = ["Karachi" , " Lahore" , " Islamabad" , "Quetta" , "Peshawar"];
// document.write("<h1> Cities List:<h1/>" + cityNames + "<br/>" + "<br/>" + "<h1> Selected cities List:<h1/>" + cityNames.slice(2,4)); 



// ------------- Question No.12-------------------


// var arr = ["This", "is", "my", "cat"];
// document.write("<h1>Array:</h1>"  + arr + "<br/>" + "<br/>" + "<h1>String:</h1>" + arr.join( " " ));



// ------------- Question No.13-------------------

// var Devices = ["Keyboard", "Mouse" , "Printer" , "Moniter"];
// document.write("<h1>Devices</h1>" + " " + Devices);
// document.write("<h1>Out:</h1>" + Devices.shift() + "<br/>" + "<h1>Out:</h1>" + Devices.shift() + "<br/>" + "<h1>Out:</h1>" + Devices.shift() + "<br/>" +"<h1>Out:</h1>" + Devices.shift() + "<br/>" )


// ------------- Question No.14-------------------

// var Devices = ["Keyboard", "Mouse" , "Printer" , "Moniter"];
// document.write("<h1>Devices</h1>" + " " + Devices);
// document.write("<h1>Out:</h1>" + Devices.pop() + "<br/>" + "<h1>Out:</h1>" + Devices.pop() + "<br/>" + "<h1>Out:</h1>" + Devices.pop() + "<br/>" +"<h1>out:</h1>" + Devices.pop() + "<br/>" )


// ------------- Question No.15-------------------

// var phoneManufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

// document.write("<select>" + 
// "<option>" + phoneManufacturers[0]+ "</option>"+
// "<option>" + phoneManufacturers[1]+ "</option>"+
// "<option>" + phoneManufacturers[2]+ "</option>"+
// "<option>" + phoneManufacturers[3]+ "</option>"+
// "<option>" + phoneManufacturers[4]+ "</option>"+
// "<option>" + phoneManufacturers[5]+ "</option>"+
// "</select>");