// スクロール時にふわっと出現するアニメーション
const cards = document.querySelectorAll(".member-card");

const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, options);

cards.forEach(card => observer.observe(card));

