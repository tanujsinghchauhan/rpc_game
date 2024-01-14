let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara =document.querySelector("#userscore");
const compscorepara =document.querySelector("#compscore");

const generatecompchoice = ()=> {
    const options = ["rock","paper","scissors"];
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
     
};

const drawgame=()=>{
    
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor="grey";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userscore++;
        userscorepara.innerText =userscore;
        
        msg.innerText = `You Win!! ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        
        msg.innerText = `You Loose!! ${compchoice} beat ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = (userchoice)=> {
    console.log("user choice- ", userchoice);
    const compchoice = generatecompchoice();
    console.log("comp choice- ", compchoice);
    if(userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    


};

choices.forEach((choice)=> {
    
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
      
        playgame(userchoice); 


    });
});