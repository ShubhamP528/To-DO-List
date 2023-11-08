const inp=document.querySelector('#inp');
const click=document.querySelector('.fa-calendar-plus');
const list=document.querySelector('#list')

let isTrue=true;


click.addEventListener('click',()=>{

    // Collecting input text as toDoText!!
    const toDoText=inp.value;

    let toDoLi=document.createElement('li');

    // For adding color classes!! 

    if(isTrue){
        toDoLi.setAttribute('class','first')
    }
    else{
        toDoLi.setAttribute('class','second')
    }
    isTrue=!isTrue;


    const span=document.createElement('span');

    const i1=document.createElement('i');   // creating down arrow icon!!
    i1.setAttribute('class','fa-regular fa-circle-down');

    const i2=document.createElement('i');   // creating up arrow icon!!
    i2.setAttribute('class','fa-regular fa-circle-up');

    const i3=document.createElement('i');   // creating trash icon!!
    i3.setAttribute('class','fa-solid fa-trash-can');

    const i4=document.createElement('i');   // creating edit icon!!
    i4.setAttribute('class','fa-solid fa-pen-to-square');

    span.innerText=toDoText;

    toDoLi.append(i3);   // adding trash icon in toDoLi!!
    toDoLi.append(i2);   // adding up arrow icon in toDoLi!! 
    toDoLi.append(i1);   // adding down arrow icon in toDoli!!
    toDoLi.append(span); // adding span as a toDoText in toDoLi!!
    toDoLi.append(i4);   // adding trash icon in toDoLi!!

    list.append(toDoLi); // adding toDoLi in list or in ul!!
    inp.value="";

    // trash icon function
    i3.onclick=()=>{
        toDoLi.remove();
    }

    // up arrow icon function
    i2.onclick=()=>{
        let temp = span.innerText;
        span.innerText=toDoLi.previousElementSibling.children[3].innerText;
        toDoLi.previousElementSibling.children[3].innerText=temp;
    }

    // down arrow icon function    
    i1.onclick=()=>{
        let temp=span.innerText;
        span.innerText=toDoLi.nextElementSibling.children[3].innerText;
        toDoLi.nextElementSibling.children[3].innerText=temp;
    }

    const update=document.querySelector('.fa-floppy-disk');  // selecting save icon

    // edit icon function
    i4.onclick=()=>{
        inp.value=span.innerText;
        update.setAttribute('id','');
        click.setAttribute('id','hidden');
        update.onclick=()=>{
            span.innerText=inp.value;
            inp.value="";
            click.setAttribute('id','');
            update.setAttribute('id','hidden');
        }
    }
    
})


