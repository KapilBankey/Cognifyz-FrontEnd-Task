// JavaScript to fetch data from JSONPlaceholder API and display it in the DOM
document.getElementById('fetchButton').addEventListener('click', function() {
  // Fetch data from the JSONPlaceholder API
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // Parse the JSON data
      .then(data => {
          // Select the container where the posts will be displayed
          const postsContainer = document.getElementById('postsContainer');
          postsContainer.innerHTML = ''; // Clear previous content

          // Loop through the fetched data and create elements for each post
          data.forEach(post => {
              const postElement = document.createElement('div');
              postElement.className = 'post';

              const postTitle = document.createElement('h2');
              postTitle.textContent = post.title;

              const postBody = document.createElement('p');
              postBody.textContent = post.body;

              postElement.appendChild(postTitle);
              postElement.appendChild(postBody);
              postsContainer.appendChild(postElement);
          });
      })
      .catch(error => console.error('Error fetching posts:', error));
});
