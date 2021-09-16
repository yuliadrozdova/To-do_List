let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
let valueInput = '';
let input = null;

window.onload = function init () {
    input = document.getElementById('add-task');
    input.addEventListener('change', updateValue);
    render();
}

onClickButton = () =>{
    allTasks.push({
        text: valueInput,
        isCheck: false
    });
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    valueInput = '';
    input.value = '';
    console.log(allTasks);
    render();
}

updateValue = (event) => {
    valueInput = event.target.value;
}

render = () => {
    const content = document.getElementById('content-page');
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    console.log(allTasks);
    allTasks.map((item, index) => {
       localStorage.setItem('tasks', JSON.stringify(allTasks));

       const container = document.createElement('div');
       container.id = `task-${index}`;
       container.className = 'task-container';

       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.checked = item.isCheck;
       checkbox.onchange = function () {
           onChangeCheckbox(index);


       };
       container.appendChild(checkbox);

       const text = document.createElement('input');
       text.type = 'text';
       text.innerText = item.text;
       text.placeholder = item.text;

       text.className = item.isCheck ? 'text-task done-text' : 'text-task';
       container.appendChild(text);

        const imageDone = document.createElement('img');
        imageDone.src = 'img/done.png';
        container.appendChild(imageDone);
        imageDone.hidden = true;

       const imageEdit = document.createElement('img');
       imageEdit.src = 'img/edit.png';
       container.appendChild(imageEdit);
       imageEdit.onclick = function () {

           imageEdit.hidden = true;
           imageDone.hidden = false;

           text.className = 'text-edit';
           text.value = item.text;

           //editTask(index);
       }

        imageDone.onclick = function func() {
            item.text = text.value;

            doneTask(item, index);
            text.className = 'text-task';
            imageEdit.hidden = false;
            imageDone.hidden = true;
        }

        const imageDelete = document.createElement('img');
        imageDelete.src = 'img/close.svg';
        container.appendChild(imageDelete);
        imageDelete.onclick = function () {
            deleteTask(index);
        }

       content.appendChild(container);
    });
}

onChangeCheckbox = (index) => {
    allTasks[index].isCheck = !allTasks[index].isCheck;
    localStorage.setItem('tasks', JSON.stringify(allTasks));

render();
}

deleteTask = (index) => {
    allTasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    render();
}
// editTask = (index) => {
//
// }

doneTask = (item, index) => {
    allTasks[index].text = allTasks[index].text;

    localStorage.setItem('tasks', JSON.stringify(allTasks));
    console.log(allTasks);
}


console.log(allTasks);

//************************************************************
// let ps = document.getElementsByClassName('p');
//
// for (let i=0; i < ps.length; i++){

// allTasks[index].addEventListener('click', function func() {
//      let input = document.createElement('input');
//      input.value = this.innerHTML;
//      this.innerHTML = '';
//      this.appendChild(input);
//
//      let p = this;
//      input.addEventListener('blur', function () {
//          p.innerHTML = this.value;
//          p.addEventListener('click', func);
//      });
//
//      this.removeEventListener('click', func);
// })