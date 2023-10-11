document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".sakura-container");

    function createSakura() {
        const sakura = document.createElement("div");
        sakura.className = "sakura";

        const left = Math.random() * 100;
        sakura.style.left = `${left}vw`;

        const size = Math.random() * 20 + 10;
        sakura.style.width = `${size}px`;
        sakura.style.height = `${size}px`;

        const animationDuration = Math.random() * 5 + 5;
        sakura.style.animationDuration = `${animationDuration}s`;

        container.appendChild(sakura);

        sakura.addEventListener("animationiteration", () => {
            sakura.remove();
            createSakura();
        });
    }

    for (let i = 0; i < 20; i++) {
        createSakura();
    }
});
