//wk1-2 countdown timer should run 10....1 then blastoff
function startCountdown() {
    var count = 10;
    //the countdown timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //the countdown timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //after 2 sec, will run code in here
        //the countdown timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 2
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //after 3 sec, will run code in here
        //the countdown timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 3
        count = count - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //after 4 sec, will run code in here
        //the countdown timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 4
        count = count - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //after 5 sec, will run code in here
        //the countdown timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 5
        count = count - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //after 6 sec, will run code in here
        //the countdown timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 6
        count = count - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //after 7 sec, will run code in here
        //the countdown timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 7
        count = count - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //after 8 sec, will run code in here
        //the countdown timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 8
        count = count - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //after 9 sec, will run code in here
        //the countdown timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 9
        count = count - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //after 10 sec, will run code in here
        //the countdown timer should display Blastoff
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000); //display Blastoff text
}