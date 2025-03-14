document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".circle").forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        circle.style.setProperty("--percent", percent);
    });
});
