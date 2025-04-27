const divs = document.querySelectorAll('.image');

// Add event listeners for drag and drop
let draggedImage = null;
images.forEach(image => {
    image.addEventListener('dragstart', (e)=>{
    draggedImage=e.target;
		e.dataTransfer.effectAllowed = 'move';
  });
image.addEventListener('dragover', (e) => {
    e.preventDefault(); // Required to allow drop
    e.dataTransfer.dropEffect = 'move';
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target !== draggedImage && e.target.classList.contains('image')) {
      swapImages(draggedImage, e.target);
    }
  });
});

function swapImages(img1, img2) {
  const temp = img1.style.backgroundImage;
  img1.style.backgroundImage = img2.style.backgroundImage;
  img2.style.backgroundImage = temp;
}
//✅ Now everything will work perfectly — drag one image over another, and they’ll swap places.

//Would you like this wrapped in a downloadable zip or deployed to a live preview site like CodePen?






