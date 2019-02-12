var typed = new Typed('.blink', {
  strings: ["Eter your TODO.", "Enter your TODO."],
  typeSpeed: 100
});


var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

// remove All Button 

removeAll.onclick = function(){
    list.innerHTML = '';
}

// adding a new list Element 

add.onclick = function(){
    addlist(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
}

function addlist(targetUl){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');

    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = '&times;';
        removeButton.setAttribute('onclick','removeMe(this)');
        li.appendChild(textNode);
        li.appendChild(removeButton);    
        targetUl.appendChild(li);
    } else {
        alert("Please enter a todo");
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}

