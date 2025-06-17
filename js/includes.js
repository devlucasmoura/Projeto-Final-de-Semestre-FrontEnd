function loadHTML(id, file) {
    fetch(file)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Erro ao carregar ' + file);
        }
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    loadHTML("navbar-placeholder", "includes/nav.html");
    loadHTML("footer-placeholder", "includes/footer.html");
  });
  