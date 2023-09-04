document.addEventListener('DOMContentLoaded', () => {
    setInterval(createFirework, 2000); // Membuat kembang api setiap 2 detik
});

function createFirework() {
    const numberOfFireworks = 1; // Menentukan berapa banyak kembang api yang akan dibuat setiap kali
    for (let i = 0; i < numberOfFireworks; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(firework);

        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}
