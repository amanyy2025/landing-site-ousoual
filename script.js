// -------------------------
// تشغيل الفيديو
// -------------------------
document.querySelectorAll('.video-list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const videoId = this.getAttribute('data-video');
        if (videoId) {
            const iframe = document.querySelector('iframe[name="youtube-frame"]');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            document.getElementById('player').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// -------------------------
// زر الرجوع لأعلى
// -------------------------
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// -------------------------
// إظهار/إخفاء القوائم المنسدلة
// -------------------------
const toggleHeaders = document.querySelectorAll('.toggle-header');

toggleHeaders.forEach(header => {
    const collapsibleList = header.nextElementSibling; // القائمة اللي بعد العنوان
    const arrow = header.querySelector('.arrow'); // السهم داخل العنوان

    header.addEventListener('click', () => {
        collapsibleList.classList.toggle('active');
        if (arrow) arrow.classList.toggle('rotate');
    });
});
