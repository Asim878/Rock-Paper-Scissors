let userscore = 0;
let comscore = 0;

let choices = document.querySelectorAll(".choice")

let msg=document.querySelector(".msg")

let userp=document.querySelector("#userscore")
let comp=document.querySelector("#compscore")



let comchoices = () => {
    let option = ["rock", "paper", "scissor"]
    let random = Math.floor(Math.random() * 3)

    return option[random];
}

let drawgame = () => {
    msg.innerHTML="Game was Draw";
}

let showwinner = (userwin,userchoice,comchoice) => {

    if (userwin) {
        userscore++;
        userp.innerHTML=userscore;
        msg.innerHTML=`You Win your ${userchoice} beats ${comchoice}`;
    }
    else {
        comscore++;
        comp.innerHTML=comscore;
        msg.innerHTML=`You lose ${comchoice} beats your ${userchoice}`;
    }
}

let playgame = (userchoice) => {

    let comchoice = comchoices();

    if (userchoice === comchoice) {
        drawgame()
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comchoice === "paper" ? false : true;
        }

        else if (userchoice === "paper") {
            userwin = comchoice === "scissor" ? false : true;
        }

        else {
            userwin = comchoice === "rock" ? false : true;
        }
        showwinner  (userwin,userchoice,comchoice);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id")
        playgame(userchoice)




    })
})