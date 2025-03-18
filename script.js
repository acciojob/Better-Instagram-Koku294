const divs = document.querySelectorAll('.draggable');

// Add event listeners for drag and drop
divs.forEach(div => {
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragover', handleDragOver);
    div.addEventListener('drop', handleDrop);
});

let draggedDiv = null;

function handleDragStart(e) {
    draggedDiv = e.target; // Store the element being dragged
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    e.preventDefault(); // Allow dropping by preventing default
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
    e.preventDefault();
    
    const targetDiv = e.target;

    // Only swap if the target is a valid div and not the same as the dragged one
    if (targetDiv !== draggedDiv && targetDiv.classList.contains('draggable')) {
        swapImages(draggedDiv, targetDiv);
    }
}

function swapImages(div1, div2) {
    const tempImage = div1.style.backgroundImage;
    div1.style.backgroundImage = div2.style.backgroundImage;
    div2.style.backgroundImage = tempImage;
}