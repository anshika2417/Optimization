document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<img src="${img.src}" alt="Large View">`;
            document.body.appendChild(lightbox);
            lightbox.addEventListener("click", () => lightbox.remove());
        });
    });
});
