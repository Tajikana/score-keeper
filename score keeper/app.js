
const resetbutton=document.querySelector("#reset");
const playingtoselect = document.querySelector("#playingto");

let winningscore=3;
let isgameover=false;


const player1={
    score:0,
    button:document.querySelector("#player1score"),
    display:document.querySelector("#player1"),

}
const player2={
    score:0,
    button:document.querySelector("#player2score"),
    display:document.querySelector("#player2"),

}

function scoreupdater(player, opponent) {
    if (!isgameover) {
        player.score++;
        if (player.score === winningscore) {
    
            isgameover = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
    
        }
        player.display.textContent = player.score;
    }
}


player1.button.addEventListener("click",function(){
   scoreupdater(player1,player2);
}
) 


player2.button.addEventListener("click",function(){
    scoreupdater(player2,player1);
})


resetbutton.addEventListener("click",reset);


function reset(){
    isgameover=false;
    for(let p of [player1,player2]){
        p.score=0;
        p.display.textContent=0;

        p.button.disabled=false;
    }
  
}


playingtoselect.addEventListener("change",function(){
    winningscore=parseInt(this.value);
    reset();
})


const darkModeCheckbox = document.querySelector("#darkModeToggle");

darkModeCheckbox.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});