// ----------------chapter 1 to 4----------//

// alert("Welcome to our website!.");

                    
// document.write('<h2>Welcome to our website!</h2>.')
                    
// alert('Error! Please enter a valid password.');
                    
// alert('Welcome to JS Land.... \n Happy Coding!');
                    
// alert('Welcome to JS Land....');
// alert('Happy Coding! \n Prevent this page from creating additional dialogs.');

                    
// alert('Hello.... I can run JS through my web browser`s console');
                    


                    //----------chapter02----//
// 1. Declaration of variable
// var userName;

//  2.declaration of variable with assigning name
// var myName = "Muhammad wali khan";

// 3. Write script to a b c part
// var message;
// message = "Hello World";
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var stdName = "Muhammad Wali khan";
// var stdAge = "25 year old!";
// var certification = " Certified Mobile Application Development";
// alert(stdName);
// alert(stdAge);
// alert(certification);

// 5. . Write a script to display the following alert using one JS variable:
// var item = "PIZZA";
//  alert(item +"\nPIZZ\nPIZ\nPI\n\P");

 // 6. Declare a variable called email and assign to it a string that represents your Email Address
// var email = "raxnice886@gmail.com";
// alert("My email address is " + email);

// 7. Declare a variable called book & give it the value
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// 8.  Write a script to display this in browser through JS.
// var displayBrowse = "Yah! I can write HTML content through JavaScript";
// document.write(displayBrowse);

// 9. . Store following string in a variable and show in alert and browser through JS
// var designOfLine =  "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(designOfLine);

                    //-------chapter 03--------//

// 1. . Declare a variable called age & assign to it your age.
// var age = 25;
// alert( "I am " + age + " year old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
// var visitedTime = 14;
// alert("You have visited this site " + visitedTime + " times");

// 3. Declare a variable called birthYear & assign to it your birth year.
// var birthYear = 1998;
// document.write("My birth year is " + birthYear);
// document.write("<br>");


// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//  var store = " Big Store";
// var visitorName = "John Doe";
// var productTitle = " Shoes";
// var Quantity = "5";

// document.write( visitorName + " ordered " + Quantity + " " + productTitle + " on " + store);

                // chapter 04 //

// 1. Declare 3 variables in one statement.
// var name  , age , bloodGroup
// 2. Declare 5 legal & 5 illegal variable names.
// var My_Age;
// var $myAccount
// var _myBloodGroup
// var legalVariable
// var not_Illegal_Variable

// var  1_myAccount
// var %myPercentage
// var #BitcoinHash
// var ~transaction
// var +addition

// 3. 3. Display this in your browser
// document.write(" <h3>Rules for naming JS variables</h3>")
// document.write("<br>")
// document.write(" Variable names can only contain , members , $ and _ , For example:$myfirst_Variable")
// document.write("<br>")
// document.write(" Variables must begin with a letter , $ or _, For Example: $name , _name or name ")
// document.write("<br>")
// document.write("Variables names are case sensitive")
// document.write("<br>")
// document.write("Variables names should not be a JS keyword")


// -------------chapter 9 to 11----------------//

// ---------------CITY-------------- //
// var city = prompt('Please enter your city');
// if("karachi".toLocaleUpperCase);
// alert('WElcome to City Of Lights');
// -------------Gender----------- //
// var gender = prompt("Enter your Gender please ?")
// if (gender.toUpperCase() == "male".toUpperCase()) {
//     alert("Good Morning Sir")
// }
//     else if (gender.toUpperCase() == 
//     "female".toUpperCase()) {
//         alert("Good Morning Ma’am")
//     }

// ---------------Signal Message------------- //
// var color = prompt("Enter any color of traffic signal")
// if (color.toUpperCase() == "red".toUpperCase()){
//     alert('Vehicle Must Stop')
// };
//     if (color.toUpperCase() == "yellow".toUpperCase()){    
//     alert('vehicle should get ready to move')
// };

//     if (color.toUpperCase() == "green".toUpperCase()){
//     alert('vehicle can move now')
// };
// ---------Car Fuel------------ //
// var  fuelQuantity = +prompt("enter the amount of remaining fuel in liters")


// if(fuelQuantity < 0.25) {
//     alert("PLEASE REFILL YOUR FUEL TANK ASAP!")
// }

// __________task 5__________

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// var b = 82;
// if(b++ === 83){
// alert("given condition for variable b is true");
// }


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



// _____________task 6_____________


// var a =[];
// var b =0;
// var c ;
// var d= 300;
// var remarks;
// var grade;
// for (var aa=1; aa<=3; aa++){
//     a[aa] = +prompt("enter a marks of three subject");
//     b=b+a[aa];
// }
// c=(b / d)*100;
// if (c==0 && c<45){
//    grade="F";
//    remarks = "fail :";
//    document.write("<h1> MARK SHEET  <br>");
//     document.write("TOTAL MARKS:" + " " + d +"<br>");
//     document.write("OBTAINED MARKS:" + " " + b + "<br>");
//     document.write("PERCENTAGE:" + " " + c + "<br>");
//     document.write("GRADE:" + " " + grade + "<br>");
//     document.write("REMARKS:" + " " + remarks + "<br> </h1>");
// }
// else if (c>45 && c<55){
//   grade="c";
//   remarks= "pass : doing hard work";
//   document.write("<h1> MARK SHEET  <br>");
//     document.write("TOTAL MARKS:" + " " + d +"<br>");
//     document.write("OBTAINED MARKS:" + " " + b + "<br>");
//     document.write("PERCENTAGE:" + " " + c + "<br>");
//     document.write("GRADE:" + " " + grade + "<br>");
//     document.write("REMARKS:" + " " + remarks + "<br> </h1>");
// }
// else if (c>55 && c<65){
//     grade = "B";
//     remarks= "pass : good";
//     document.write("<h1> MARK SHEET  <br>");
//     document.write("TOTAL MARKS:" + " " + d +"<br>");
//     document.write("OBTAINED MARKS:" + " " + b + "<br>");
//     document.write("PERCENTAGE:" + " " + c + "<br>");
//     document.write("GRADE:" + " " + grade + "<br>");
//     document.write("REMARKS:" + " " + remarks + "<br> </h1>");
// }
// else if (c>65 && c<80){
//     grade = "A";
//     remarks= "pass : smart boy";
//     document.write("<h1> MARK SHEET  <br>");
//     document.write("TOTAL MARKS:" + " " + d +"<br>");
//     document.write("OBTAINED MARKS:" + " " + b + "<br>");
//     document.write("PERCENTAGE:" + " " + c + "<br>");
//     document.write("GRADE:" + " " + grade + "<br>");
//     document.write("REMARKS:" + " " + remarks + "<br> </h1>");
// }
// else if (c>80 && c<=100){
//     grade = "A+";
//     remarks= "pass : king";
//     document.write("<h1> MARK SHEET  <br>");
//     document.write("TOTAL MARKS:" + " " + d +"<br>");
//     document.write("OBTAINED MARKS:" + " " + b + "<br>");
//     document.write("PERCENTAGE:" + " " + c + "<br>");
//     document.write("GRADE:" + " " + grade + "<br>");
//     document.write("REMARKS:" + " " + remarks + "<br> </h1>");
// }
// else{
//     document.write("enter corrects marks");
// }


// _____________task 7_____________




// var secret = 8.8;
// var se = +prompt("enter a secret number");
// if (se === secret){
//     document.write("bingo ,correct");
// }
// else if (se === secret){
//     document.write("close enough");
// }
// else {
//     document.write("wrong");
// }



// _____________task 8_____________


//  var divisible = +prompt("enter a number");
//  if (divisible%3===0){
//       document.write("number is divisible by 3");
//  }
// else{
//     document.write("its not divisible by 3");
// }


// _____________task 10_____________


// var givenTemp = +prompt("Enter the temperature you know.")

// if (givenTemp > 40) {
//     document.write("<h2>The temperature is too hot outside</h2>")
// }

// else if (givenTemp > 30) {
//     document.write("<h2>The Weather today is Normal.</h2>")
// }

// else if (givenTemp > 20) {
//     document.write("<h2>Today’s Weather is cool.</h2>")
// }

// else if (givenTemp > 10) {
//     document.write("<h2>OMG! Today’s weather is so Cool.</h2>")
// }


// _____________task 9_____________

// var no = +prompt("enter a number");
// if (no%2===0){
//     document.write("even num");
// }
// else {
//     document.write("odd no");
// }

// _____________task 11_____________


// var no1 = +prompt("enter no 1");
// var no2 = +prompt("enter no2");
// var sym = prompt("enter what you do in calculator");
// if (sym== "+"){
//     document.write("the addition is :" + " " + (no1+no2));
// }
// else if (sym== "-"){
//     document.write("the subtraction is :" + " " + (no1-no2));
// }
// else if (sym== "*"){
//     document.write("the multiplication is :" + " " + no1*no2);
// }
// else if (sym== "/"){
//     document.write("the division  is :" + " " + no1/no2);
// }


// _______CHAPTER NO # 12-13__________

        //       TASK # 1
// var n = +prompt("enter character");
// var A=65;
// var Z=98;
// var a=35;
// var z = 5;
// document.write(n);

        //       TASK # 2
// var aaa= +prompt("enter no1");
// var bbb= +prompt("enter no2 ");
// if (aaa>bbb){
//     document.write(aaa + " " + "is larger");
// }
// else if (aaa===bbb){
//     document.write(" equal");
// }
// else {
//     document.write("lower");
// }

        //       TASK # 3
// var num = +prompt("enter no 1");
// var state = prompt("enter state");
// if (state == "+"){
//     document.write("number is positive");
// }
// else if (state == "-"){
//     document.write("negative");
// }
// else {
//     document.write("zero");
// }

        //       TASK # 4
// var stri = [];
//  stri = prompt("enter string");
// if (stri[0] === "a" || stri[0] === "i" || stri[0]==="e" ){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

        //       TASK # 5
//  var setPASSWORD;
// setPASSWORD = prompt("enter a password");
// var password;
// password = prompt(" retype password");
// if (setPASSWORD === password){
//     document.write("login successfully");
// }
// else {
//     document.write("incorrect password");
// }

        //       TASK # 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }

        //       TASK # 7
// var time = +prompt("Enter a time");
// if (time >= 0000 && time < 1200){
//     document.write("good morning");
// }
// else if (time >= 1200 && time < 1700){
//     document.write("good after noon");
// }
// else if (time >= 1700 && time < 2100){
//     document.write("good evening");
// }
// else if (time >= 2100 && time < 2359){
//     document.write("good night");
// }
// else {
//     document.write("enter time in this formate: for example if 12.00 clock so write 1200 , if 6.00 clock so write 1700");
// }