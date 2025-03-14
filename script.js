document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".circle").forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        let degree = (percent / 100) * 360; // 퍼센트를 각도로 변환
        circle.style.background = `conic-gradient(#6FCF97 ${degree}deg, #333 ${degree}deg)`;
    });
});
