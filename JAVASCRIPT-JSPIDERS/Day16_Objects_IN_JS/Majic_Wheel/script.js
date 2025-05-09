const spinBtn = document.getElementById("spinBtn");
const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

const totalSections = 36; // Total numbers on the wheel
const degPerSection = 360 / totalSections;

spinBtn.addEventListener("click", () => {
    const spinAngle = 3600 + Math.floor(Math.random() * 360); // 10+ rotations
    wheel.style.transform = `rotate(${spinAngle}deg)`;

    const finalAngle = spinAngle % 360;
    const selectedIndex = Math.floor(
        ((360 - finalAngle + degPerSection / 2) % 360) / degPerSection
    );

    // Numbers on the wheel in clockwise order from 12 o'clock
    const numbers = [
        1, 19, 13, 7, 25, 31, 2, 8, 14, 20, 26, 32, 9, 15, 21, 27, 33, 4, 22, 10,
        28, 34, 5, 11, 17, 23, 29, 35, 12, 18, 24, 30, 36, 6, 3, 16,
    ];

    setTimeout(() => {
        result.textContent = `🎉 Your lucky number is: ${numbers[selectedIndex]} 🎉`;
    }, 5200);
});
