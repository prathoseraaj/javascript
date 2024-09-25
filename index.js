const increasebtn = document.getElementById("myIcrease");
const resetbtn = document.getElementById("myreset");
const decresebtn = document.getElementById("mydecrese");
const countlabel = document.getElementById("countlabel");


let count=0;

increasebtn.onclick= function(){
    count++;
    countlabel.textContent=count;
}

decresebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}

resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
