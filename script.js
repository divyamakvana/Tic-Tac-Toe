let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn =true;
const win = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,4,6],
	[2,5,8],
	[3,4,5],
	[6,7,8]
];

boxes.forEach((box) => {
	box.addEventListener("click",()=>{
		console.log("clicked");
		if(turn){
		box.innerText="O";
		turn = false;
		}else{
			box.innerText="X";
			turn = true;
		}
		box.disabled= true;
		checkWinner();
	});
});

const disableboxes = ()=>{
	for(let box of boxes){
		box.disabled = true;
	}
}

const enableboxes = ()=>{
	for(let box of boxes){
		box.disabled = false;
		box.innerText= "";
	}
}

const showWinner = (winner) =>{
	msg.innerText = 'congratulation,you are winner ';
	msgcontainer.classList.remove("hide");
	disableboxes();
};

const checkWinner= () =>{
	for( let pattern of win){
		
		
		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;
		if(pos1Val !="" && pos2Val !="" && pos3Val!= ""){
			if(pos1Val === pos2Val && pos2Val === pos3Val){
				console.log("wninner",pos1Val );
				showWinner(pos1Val)
			}
		}
	}
};
const resetgame= () =>{
	turn = true;
	enableboxes();
	msgcontainer.classList.add("hide");
}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);