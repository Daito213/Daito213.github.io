let slideIndex = 1;
showSlide(slideIndex);

// -------- 自動スライド（3秒ごと） --------
let autoSlide = setInterval(() => {
    plusSlides(1);
}, 3000);

// 矢印クリック
document.querySelector(".prev").onclick = () => {
    plusSlides(-1);
    resetAutoSlide();
};

document.querySelector(".next").onclick = () => {
    plusSlides(1);
    resetAutoSlide();
};

// ドットクリック
document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
        let n = Number(dot.dataset.slide);
        currentSlide(n);
        resetAutoSlide();
    });
});

// -------- スワイプ（指で左右） --------
let startX = 0;
let endX = 0;
const container = document.querySelector(".slideshow-container");

container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) {
        // 右スワイプ（→）
        plusSlides(-1);
        resetAutoSlide();
    } else if (startX - endX > 50) {
        // 左スワイプ（←）
        plusSlides(1);
        resetAutoSlide();
    }
});


// -------- スライド制御 --------
function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // 全部非表示
    for (let s of slides) s.style.display = "none";
    for (let d of dots) d.classList.remove("active");

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// -------- 自動スライドのリセット --------
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        plusSlides(1);
    }, 3000);
}
