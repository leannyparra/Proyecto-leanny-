/* Selección de elementos */
const avatarAprendiz = document.getElementById('avatarAprendiz');
const detailsContainer = document.querySelector('.details-container');

const modal = document.getElementById('modalAyuda');
const btnAbrir = document.getElementById('btnAyuda'); 
const btnCerrarX = document.getElementById('closeAyuda');

/* 1. FUNCIONALIDAD DEL MENÚ PERFIL (Toggle) */
if (avatarAprendiz) {
    avatarAprendiz.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic se cierre solo inmediatamente
        detailsContainer.classList.toggle('is-visible');
    });
}

/* 2. FUNCIONALIDAD DEL MODAL DE AYUDA */
if (btnAbrir) {
    btnAbrir.onclick = (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    };
}

const cerrarModal = () => { modal.style.display = 'none'; };
if (btnCerrarX) btnCerrarX.onclick = cerrarModal;

/* 3. EVENTO GLOBAL DE CLIC (Cerrar todo al hacer clic fuera) */
window.addEventListener('click', (event) => {
    // Cerrar menú de perfil
    if (detailsContainer && detailsContainer.classList.contains('is-visible')) {
        if (!avatarAprendiz.contains(event.target)) {
            detailsContainer.classList.remove('is-visible');
        }
    }
    // Cerrar modal
    if (event.target == modal) {
        cerrarModal();
    }
});