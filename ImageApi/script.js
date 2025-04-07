const API_KEY = '9x3r4GMYbOYqUkZX1Kiew5KgXjJkreCxzjMBLbnOxaCj75mo7MfqJMxt'; // Replace this with your actual key
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Fetch images from Pexels API
async function fetchImages() {
  try {
    const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=20', {
      headers: {
        Authorization: API_KEY
      }
    });
    const data = await response.json();
    displayImages(data.photos);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

// Display thumbnails in gallery
function displayImages(images) {
  images.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src.medium;
    img.alt = photo.photographer;
    img.addEventListener('click', () => openModal(photo.src.large));
    gallery.appendChild(img);
  });
}

// Open modal with full-size image
function openModal(src) {
  modal.style.display = 'block';
  modalImg.src = src;
}

// Close modal
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

// Initialize
fetchImages();
