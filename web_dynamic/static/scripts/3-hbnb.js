document.addEventListener('DOMContentLoaded', function () {
  fetchPlaces();
});

function fetchPlaces () {
  fetch('http://0.0.0.0:5001/api/v1/places_search/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
    .then(response => response.json())
    .then(data => {
      data.forEach(place => {
        createPlaceElement(place);
      });
    })
    .catch(error => console.error('Error fetching places:', error));
}

function createPlaceElement (place) {
  const placesSection = document.querySelector('.places');
  const placeElement = document.createElement('article');
  placeElement.innerHTML = `
  <h2>${place.name}</h2>
  <p>${place.description}</p>
  <!-- Add other place details as needed -->
  `;
  placesSection.appendChild(placeElement);
}
