// ========================================
// MENÚ MÓVIL
// ========================================

const header = document.querySelector("header");
const nav = document.querySelector("nav");

if (header && nav) {
    const menuButton = document.createElement("button");

    menuButton.classList.add("menu-toggle");
    menuButton.setAttribute("aria-label", "Abrir menú");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = "☰";

    header.insertBefore(menuButton, nav);

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("menu-abierto");

        const abierto = nav.classList.contains("menu-abierto");

        menuButton.setAttribute("aria-expanded", abierto);
        menuButton.innerHTML = abierto ? "✕" : "☰";
    });

    // Cerrar el menú al seleccionar una opción
    nav.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            nav.classList.remove("menu-abierto");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.innerHTML = "☰";
        });
    });
}


// ========================================
// ANIMACIÓN DE SECCIONES AL HACER SCROLL
// ========================================

const elementosAnimados = document.querySelectorAll(
    ".tecnologia-grupo, .experiencia-card, .proyecto, .contacto-item"
);

const observador = new IntersectionObserver(
    (elementos) => {
        elementos.forEach((elemento) => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add("visible");
                observador.unobserve(elemento.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementosAnimados.forEach((elemento) => {
    elemento.classList.add("revelar");
    observador.observe(elemento);
});


// ========================================
// AÑO AUTOMÁTICO DEL FOOTER
// ========================================

const año = document.querySelector("footer");

if (año) {
    año.innerHTML = año.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );
}


// ========================================
// EFECTO DE NAVEGACIÓN ACTIVA
// ========================================

const secciones = document.querySelectorAll("section[id]");
const enlacesNav = document.querySelectorAll('nav a[href^="#"]');

const observadorSecciones = new IntersectionObserver(
    (elementos) => {
        elementos.forEach((elemento) => {
            if (elemento.isIntersecting) {
                enlacesNav.forEach((enlace) => {
                    enlace.classList.remove("activo");
                });

                const enlaceActivo = document.querySelector(
                    `nav a[href="#${elemento.target.id}"]`
                );

                if (enlaceActivo) {
                    enlaceActivo.classList.add("activo");
                }
            }
        });
    },
    {
        threshold: 0.45
    }
);

secciones.forEach((seccion) => {
    observadorSecciones.observe(seccion);
});