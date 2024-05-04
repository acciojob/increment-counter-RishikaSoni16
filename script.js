let para = document.querySelector("#counter");
let btn = document.querySelector("#incrementBtn");
let num=1;
btn.addEventListener("click",() =>{
	if(num<=3){
		para.textContent=num;
	    alert(num);
	    num++;}
	});