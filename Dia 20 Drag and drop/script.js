//HTML Drag and Drop API
//https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
};

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
};

function dragEnd() {
    this.className = 'fill';
};

function dragOver(e) {
    e.preventDefault();
};

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
};

function dragLeave() {
    this.className += 'empty';
};

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
};