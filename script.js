const menuIcon = document.querySelector("#menu-icon");
//const menuText = document.querySelector('.nav-links');

document.querySelectorAll("#projects .btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".project-card");
        card.classList.toggle("expanded");
        btn.textContent = card.classList.contains("expanded") ? "Shrink" : "Expand";
    });
});
