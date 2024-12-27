document.addEventListener("mousemove", (e) => {
    const pupil = document.querySelector(".pupil");
    const logo = document.querySelector(".logo-container");
    const rect = logo.getBoundingClientRect();
    
    // Calcul de la position de la souris par rapport au logo
    let x = e.clientX - rect.left - rect.width / 2;
    let y = e.clientY - rect.top - rect.height / 2;

    // Limiter le mouvement dans un cercle avec un rayon maximum
    const maxDistance = 28.5; // Rayon maximum du cercle

    // Calculer la distance entre le centre et la position actuelle
    const distance = Math.sqrt(x * x + y * y);

    // Si la distance dépasse le rayon maximum, ajuster les coordonnées
    if (distance > maxDistance) {
        const angle = Math.atan2(y, x); // Calculer l'angle de déplacement
        x = Math.cos(angle) * maxDistance; // Limiter à la distance maximale
        y = Math.sin(angle) * maxDistance;
    }

    // Appliquer la transformation avec les coordonnées limitées
    pupil.style.transform = `translate(${x}px, ${y}px)`;
});
