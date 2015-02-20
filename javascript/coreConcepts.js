// this is a comment
/*  This is a
    block comment */

var userName = "my name";

userName = "tevenson";

var firstName = "Thomas";
var lastName = "Evenson";

var myComment = "the comment.";
var myQuote = '"OMG!"';

var message = firstName + " " + lastName;
var string1 = document.getElementById("replace");
string1.innerHTML = message;

var imagePath = 'images/watercolor/artwork_1.jpg';
message = message.toUpperCase();
console.log(message);

var level = 1;
var lives = 3;
var ssNumber = 12345678;
var cost = 1.50;
var cost1 = 50;
var cost2 = 50;
var total = cost1 + cost2;
console.log(total);

console.log(level);

var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById("placeholder").setAttribute("src", imageList.pop());

var age = 20;
var oldEnough = false;

if (age < 20) {
    oldEnough = false;
} else if (age >= 20) {
    oldEnough = true;
}

if (oldEnough) {
    console.log("You are old enough.");
} else {
    console.log("You are NOT old enough.");
}

function dynamicGreeting() {
    var now = new Date();
    var time = now.getHours();
    
    if (time < 12) {
        alert("Good morning.");
    } else if (time == 12) {
        alert("Noon.");
    } else if (time > 12) {
        alert("Good evening, the time is " + now.toLocaleTimeString());
    }
}

//dynamicGreeting();