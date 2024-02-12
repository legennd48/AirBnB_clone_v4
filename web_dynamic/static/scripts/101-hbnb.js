// When the span next to the Reviews h2 is clicked
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleReviews').addEventListener('click', function () {
    const reviewsList = document.getElementById('reviewsList');
    const toggleSpan = document.getElementById('toggleReviews');

    if (toggleSpan.innerText === 'show') {
      // Fetch, parse, and display reviews
      fetchReviews().then(reviews => {
        reviewsList.innerHTML = reviews;
        toggleSpan.innerText = 'hide';
      });
    } else {
      // Hide reviews
      reviewsList.innerHTML = '';
      toggleSpan.innerText = 'show';
    }
  });
});

// Function to fetch reviews
function fetchReviews () {
  return fetch('http://0.0.0.0:5001/api/v1/reviews/')
    .then(response => response.json())
    .then(data => {
      let reviewsHTML = '';
      data.forEach(review => {
        reviewsHTML += `<p>${review.text}</p>`;
      });
      return reviewsHTML;
    })
    .catch(error => console.error('Error fetching reviews:', error));
}
