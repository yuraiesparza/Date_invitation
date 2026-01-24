const btnNo = document.getElementById('btnno');
const btnYes = document.getElementById('btnyes');

// Función para mover Y agrandar el botón "No" cuando se pasa el mouse sobre él
btnNo.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Calcular posiciones aleatorias dentro del contenedor
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Aplicar movimiento
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;

    // Aplicar crecimiento (puedes ajustar el scale si quieres que crezca más, ej. 2 para duplicar)
    btnNo.style.transform = 'scale(1.5)';
    btnNo.style.transition = 'transform 0.3s ease'; // Animación suave para el crecimiento
});

// Función para volver al tamaño normal cuando el mouse sale del botón (pero el movimiento se mantiene)
btnNo.addEventListener('mouseout', () => {
    btnNo.style.transform = 'scale(1)'; // Vuelve al tamaño original
});

// Función para el botón "Sí" (puedes personalizar qué hacer aquí, como mostrar un mensaje)
btnYes.addEventListener('click', () => {
    alert('¡Genial! Nos vemos el 8 de febrero. ☕❤️');
});
