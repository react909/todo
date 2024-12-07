let input = document.querySelector(".input");

let addBtn = document.querySelector('.todo__add_btn');
let list = document.querySelector('.todo__list_ul')

let full = 0;
let empty =0;

const dela = {
    zadacha:[]
}


addBtn.addEventListener("click", ()=> {

    let addInput = input.value;
    if (addInput) {
    dela.zadacha.push(addInput)
 

     
    createElement(dela.zadacha, list)
    }
    else{
        alert("Нечево не выполнина!")
    }


});

function createElement(zadacha, spisok) {
    spisok.innerHTML="";
    zadacha.forEach((el,idx)=>{
        spisok.innerHTML+=`
        <li class="todo__list_li">
        <span class="todo__li_text"> ${idx+1}) ${el} </span>

        <div class="costm">
          <span class="todo__li_true">🎨</span>
          <span class="todo__li_false">➖</span>
          <span class="todo__li_delete">🗑</span>
        </div>
      </li>
        `
    });
    input.value = ''

        document.querySelectorAll(".todo__li_true").forEach((el, idx)=>{
        el.addEventListener('click', function() {
            let active = document.querySelectorAll(".todo__list_li");
           


            active[idx].classList.toggle('active')

            if(active = "active"){
                full += +1
            }

            document.querySelector(".full").innerHTML=`${full}`
        })
    });
    document.querySelectorAll(".todo__li_false").forEach((el, idx)=>{
        el.addEventListener('click', function() {
            let active = document.querySelectorAll(".todo__li_text");

            active[idx].classList.toggle('notActive')
        })
    });

     document.querySelectorAll(".todo__li_delete").forEach((el, idx)=>{
        el.addEventListener('click', function() {
            el.parentElement.remove();
            dela.zadacha.splice(idx, 1)
            createElement(dela.zadacha, spisok)
        })
    });
}

