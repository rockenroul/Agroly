function redirect() {
    window.location.href = 'pergunta.html';
}

function toggleMenu(){
    var dropDown = document.getElementById("dropdownMenu");
    if (dropDown.style.display === 'none') {
        dropDown.style.display = 'block';
      } else {
        dropDown.style.display = 'none';
      }
}

function toggleHeight() {
  var content = document.getElementById('dropdownMenu');
  content.classList.toggle('expanding');
}