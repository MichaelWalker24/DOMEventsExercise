const button1=document.getElementById(`one`);

button1.onclick=function() {
    alert(`You clicked the first button! Congrats!`)
}

const h3=document.querySelector(`h3`);

h3.addEventListener(`mouseover`,()=>{
    alert(`You just hovered over the h3 element! Congrats!`);
},{once:true});

const form=document.querySelector(`form`);

form.addEventListener(`submit`,()=>{
    alert(`${form.entry.value}`);
});

// BONUS
const darkMode=document.getElementById(`dm`);

const srat=document.querySelector(`*`);
darkMode.addEventListener(`click`,()=>{
    star.classList.toggle(`toggle`);
});

const times=document.querySelector(`#times`);

let num=3;
times.addEventListener(`click`,()=>{
    num--
    if(num>0){
        alert(`You clicked the last button! Congrats!`);
    }else if (num<=0){
        alert(`OH NO! This button is NOT going to work anymore`);
        times.disabled=true;
    }
});
