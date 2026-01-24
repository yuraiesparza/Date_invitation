const btnNo = document.getElementById('btnno');
const btnYes = document.getElementById('btnyes');

// Función para mover el botón "No" cuando se pasa el mouse sobre él
btnNo.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Calcular posiciones aleatorias dentro del contenedor
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

// Función para el botón "Sí" (puedes personalizar qué hacer aquí, como mostrar un mensaje)
btnYes.addEventListener('click', () => {
    alert('¡Genial! Nos vemos el 8 de febrero. ☕❤️');
});
