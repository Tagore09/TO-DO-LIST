document.addEventListener('DOMContentLoaded', () => {
  function addCloseButton(li) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }

  const list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'INPUT' && ev.target.type === 'checkbox') {
      ev.target.parentElement.classList.toggle('checked');
    }
  }, false);

  function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
      alert("You must write something!");
      return;
    }
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    addCloseButton(li);
  }

  document.querySelector('.addBtn').addEventListener('click', newElement);
});
