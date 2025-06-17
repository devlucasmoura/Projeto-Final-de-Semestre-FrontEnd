// código para criar um menu dropdown com as opções de serviço
  document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdown = document.querySelector('.dropdown');

  dropdownButton.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
  
  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
});