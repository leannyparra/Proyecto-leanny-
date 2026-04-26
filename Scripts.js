/* ayuda */
const modal = document.getElementById('modalAyuda');
    const btnAbrir = document.getElementById('btnAyuda'); //idAyuda
    const btnCerrarX = document.getElementById('closeAyuda');

    // Función para abrir
    btnAbrir.onclick = function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
    }

    // Función para cerrar
    function cerrarModal() {
        modal.style.display = 'none';
    }

    // Cerrar si hacen clic en la X
    btnCerrarX.onclick = cerrarModal;

    // Cerrar si hacen clic fuera de la ventana blanca
    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    }