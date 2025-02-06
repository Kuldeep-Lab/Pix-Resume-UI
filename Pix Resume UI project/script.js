document.getElementById("menu-button").addEventListener("click", function() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// slider code 
let angle = 0;
        function rotateCarousel(direction) {
            angle += direction * 120;
            document.getElementById('carousel').style.transform = `rotateY(${angle}deg)`;
        }
        setInterval(() => rotateCarousel(1), 3000);

// dropdown code 
document.getElementById("dropdownButton").addEventListener("click", function() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("hidden");
});


// faq code 
function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const isOpen = !content.classList.contains('hidden');

  document.querySelectorAll('[id^="content-"]').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('[id^="icon-"]').forEach(el => el.textContent = '➕');
  
  if (!isOpen) {
      content.classList.remove('hidden');
      icon.textContent = '➖';
  }
}

