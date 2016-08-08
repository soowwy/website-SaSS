/**
 * Created by sowwy on 8/5/16.
 */

document.addEventListener('DOMContentLoaded', function () {

    var firstImg = document.getElementById("oneOne");
    var secondImg = document.getElementById("twoTwo");
    var thirdImg = document.getElementById("threeThree");
    var h1 = document.getElementById("h");
    var p = document.getElementById("p");
    getForm();
    one();
    two();
    three();
    four();
    five();

    firstImg.addEventListener('click', function () {

        document.getElementById('poster').style.background = "url('assets/images/wow.jpg')";
        h1.innerHTML = "World of Warcraft";
        p.innerHTML = "As an Orc horde invades the planet Azeroth using a magic portal, <br> " +
            "a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.";

    }, false);

    secondImg.addEventListener('click', function () {

        document.getElementById('poster').style.background = "url('assets/images/batman-wallaper.jpg')";
        h1.innerHTML = "The Dark Knight";
        p.innerHTML = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, <br>" +
            " the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.";

    }, false);

    thirdImg.addEventListener('click', function () {

        document.getElementById('poster').style.background = "url('assets/images/spiderman-wallpaper.jpg')";
        h1.innerHTML = "Spiderman";
        p.innerHTML = "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he <br> swore to protect as well as his loved ones.";

    }, false);

}, false);


function getForm () {
    var form = document.querySelector(".mailform");
    var email = document.getElementById("Email");
    var input = document.querySelector("input");
    form.addEventListener('focus', focusInput, true);
    form.addEventListener('blur', blurInput, true);

}
function blurInput(event){
    var target = event.target;
    var email = document.getElementById("Email");
    var name = document.getElementById("Name");
    var message = document.getElementById("Message");
    var opasity  = document.querySelector(".mfPlaceHolder");

    if(event.target.name == "email" && event.target.value == ""){
        email.className = "mfPlaceHolder";
        email.style.opacity = 1;
    }
    if(event.target.name == "message" && event.target.value == ""){
        message.className = "mfPlaceHolder";
        message.style.opacity = 1;
    }
    if(event.target.name == "name" && event.target.value == ""){
        name.className = "mfPlaceHolder";
        name.style.opacity = 1;
    }
}
function focusInput (event) {
    debugger;
    var target = event.target;
    var email = document.getElementById("Email");
    var message = document.getElementById("Message");
    var name = document.getElementById("Name");
    if (event.target.name == "email") {
        email.className = "mfPlaceHolder change";
        email.style.opacity = 0;

    }
    if (event.target.name == "message") {
        message.className = "mfPlaceHolder change";
        message.style.opacity = 0;
    }
    if (event.target.name == "name") {
        name.className = "mfPlaceHolder change";
        name.style.opacity = 0;
    }
}

function one() {
    var counter = 0;
    var counter2 = 0;
    var smallImageOne = document.getElementById('image1');
    var smallImageTwo = document.getElementById('2');
    var smallImageThree = document.getElementById('3');

    smallImageOne.addEventListener('mouseover', function () {
        counter++;
        document.getElementById('count1').innerHTML = counter;
    }, false);

    smallImageTwo.addEventListener('click', function () {
        document.getElementById('count2').innerHTML = '01h:25m';
    }, false);

    smallImageThree.addEventListener('click', function () {
        counter2++;
        document.getElementById('count3').innerHTML = counter2;
    }, false);
}

function two() {
    var secondCounter = 0;
    var secondCounter2 = 0;
    var smallImageOne = document.getElementById('image2');
    var smallImageTwo = document.getElementById('5');
    var smallImageThree = document.getElementById('6');

    smallImageOne.addEventListener('mouseover', function () {
        secondCounter++;
        document.getElementById('count4').innerHTML = secondCounter;
    }, false);

    smallImageTwo.addEventListener('click', function () {
        document.getElementById('count5').innerHTML = '01h:45m';
    }, false);

    smallImageThree.addEventListener('click', function () {
        secondCounter2++;
        document.getElementById('count6').innerHTML = secondCounter2;
    }, false);
}

function three() {
    var thirdCounter = 0;
    var thirdCounter2 = 0;
    var smallImageOne = document.getElementById('image3');
    var smallImageTwo = document.getElementById('8');
    var smallImageThree = document.getElementById('9');

    smallImageOne.addEventListener('mouseover', function () {
        thirdCounter++;
        document.getElementById('count7').innerHTML = thirdCounter;
    }, false);

    smallImageTwo.addEventListener('click', function () {
        document.getElementById('count8').innerHTML = '01h:05m';
    }, false);

    smallImageThree.addEventListener('click', function () {
        thirdCounter2++;
        document.getElementById('count9').innerHTML = thirdCounter2;
    }, false);
}

function four() {
    var fourthCounter = 0;
    var fourthCounter2 = 0;
    var smallImageOne = document.getElementById('image4');
    var smallImageTwo = document.getElementById('11');
    var smallImageThree = document.getElementById('12');

    smallImageOne.addEventListener('mouseover', function () {
        fourthCounter++;
        document.getElementById('count10').innerHTML = fourthCounter;
    }, false);

    smallImageTwo.addEventListener('click', function () {
        document.getElementById('count11').innerHTML = '02h:05m';
    }, false);

    smallImageThree.addEventListener('click', function () {
        fourthCounter2++;
        document.getElementById('count12').innerHTML = fourthCounter2;
    }, false);
}

function five() {
    var fifthCounter = 0;
    var fifthCounter2 = 0;
    var smallImageOne = document.getElementById('image5');
    var smallImageTwo = document.getElementById('14');
    var smallImageThree = document.getElementById('15');

    smallImageOne.addEventListener('mouseover', function () {
        fifthCounter++;
        document.getElementById('count13').innerHTML = fifthCounter;
    }, false);

    smallImageTwo.addEventListener('click', function () {
        document.getElementById('count14').innerHTML = '02h:35m';
    }, false);

    smallImageThree.addEventListener('click', function () {
        fifthCounter2++;
        document.getElementById('count15').innerHTML = fifthCounter2;
    }, false);
}

