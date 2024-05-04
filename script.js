let para = document.querySelector("#counter");
let btn = document.querySelector("#incrementBtn");
let num=0;
btn.addEventListener("click",() =>{
	if(num<=3){
		 alert(num);
		num++;
		para.textContent=num;
	    }
	});