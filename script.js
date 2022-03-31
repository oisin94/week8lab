function play() {
    var x = document.getElementById("P1").value;
    var y = document.getElementById("P2").value;

    if (x == "rock" && y == "scissors") {
        z = "Player 1 is the Winner!"
    }
    else if (x == "rock" && y == "paper") {
        z = "Player 2 is the Winner"
    }

    else if (x == "rock" && y == "rock") {
        z = "It's a tie"
    }

    else if (x == "paper" && y == "rock") {
        z = "Player 1 is the Winner!"
    }

    else if (x == "paper" && y == "scissors") {
        z = "Player 2 is the Winner"
    }

    else if (x == "paper" && y == "paper") {
        z = "It's a tie"
    }

    else if (x == "scissors" && y == "paper") {
        z = "Player 1 is the Winner!"
    }

    else if (x == "scissors" && y == "rock") {
        z = "Player 2 is the Winner"
    }

    else if (x == "scissors" && y == "scissors") {
        z = "It's a tie"
    }

    else {
        z = "Invalid Input- Please Try Again"
    }

    alert(document.getElementById("result").innerHTML = z
    );

}


function showP1() {
    var x = document.getElementById("p1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showP2() {
    var x = document.getElementById("p2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}