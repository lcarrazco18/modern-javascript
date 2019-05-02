// Replace Element

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 
'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAdction = document.querySelector('.card-action'
);
//Replace
cardAdction.replaceChild(newHeading, oldHeading)
;
// Remove Element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(list[3]);

