const images = document.querySelectorAll('.image');
let draggedElement = null;

images.forEach(image => {
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault(); // Important to allow drop
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      // Swap the background images
      const draggedBg = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
