// แสดงข้อความต้อนรับ
window.onload = function () {
    alert("ยินดีต้อนรับสู่ Language Learning Hub!");
};

// ฟังก์ชันสุ่มคำศัพท์
const words = [
    {
        thai: "แมว",
        english: "Cat",
        japanese: "ねこ"
    },
    {
        thai: "น้ำ",
        english: "Water",
        japanese: "みず"
    },
    {
        thai: "โรงเรียน",
        english: "School",
        japanese: "がっこう"
    }
];

function randomWord() {
    const word = words[Math.floor(Math.random() * words.length)];

    document.getElementById("result").innerHTML =
        `
        <h3>คำศัพท์สุ่ม</h3>
        <p>🇹🇭 ${word.thai}</p>
        <p>🇬🇧 ${word.english}</p>
        <p>🇯🇵 ${word.japanese}</p>
        `;
}
