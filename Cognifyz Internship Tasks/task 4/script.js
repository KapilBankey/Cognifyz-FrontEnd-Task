
document.getElementById('colorButton').addEventListener('click', function() {
 
  const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
  
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  

  document.body.style.backgroundColor = randomColor;
});
