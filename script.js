const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("nav--open");

    });
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav--open");
        });
    });
}
document.body.classList.add("page-loaded");
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") {
            return;
        }
        const target = document.querySelector(targetId);
        if (!target) {
            return;
        }
        event.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
const openBookingButton =
    document.querySelector("#open-booking");
const generalModal =
    document.querySelector("#general-modal");
if (openBookingButton && generalModal) {
    openBookingButton.addEventListener("click", () => {
        generalModal.classList.add("is-open");
    });
}
const routeCards =
    document.querySelectorAll(".mountain-route-card");
const routeModal =
    document.querySelector("#route-modal");
const routeFormTitle =
    document.querySelector("#route-form-title");
const routeValue =
    document.querySelector("#route-value");
routeCards.forEach(card => {
    card.addEventListener("click", () => {
        const routeName =
            card.querySelector("h3")?.textContent.trim();
        if (!routeName || !routeModal) {
            return;
        }
        if (routeFormTitle) {
            routeFormTitle.textContent = routeName;
        }
        if (routeValue) {
            routeValue.value = routeName;
        }
        routeModal.classList.add("is-open");
    });
});
document.querySelectorAll(".modal__close").forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        if (modal) {
            modal.classList.remove("is-open");
        }
    });
});
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.remove("is-open");
        }
    });
});
document.addEventListener("keydown", event => {
    if (event.key !== "Escape") {
        return;
    }
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.remove("is-open");
    });
});
const generalForm =
    document.querySelector("#general-form");
if (generalForm) {
    generalForm.addEventListener("submit", event => {
        event.preventDefault();
        const name =
            generalForm
                .querySelector('[name="name"]')
                .value
                .trim();
        const phone =
            generalForm
                .querySelector('[name="phone"]')
                .value
                .trim();
        const route =
            generalForm
                .querySelector('[name="route"]')
                .value;
        if (!name || !phone || !route) {
            return;
        }
        alert(
            `Спасибо, ${name}!\n\n` +
            `Заявка на маршрут «${route}» принята.\n` +
            `Мы свяжемся с вами по номеру ${phone}.`
        );
        generalForm.reset();
        generalModal?.classList.remove("is-open");
    });
}
const routeForm =
    document.querySelector("#route-form");
if (routeForm) {
    routeForm.addEventListener("submit", event => {
        event.preventDefault();
        const name =
            routeForm
                .querySelector('[name="name"]')
                .value
                .trim();
        const phone =
            routeForm
                .querySelector('[name="phone"]')
                .value
                .trim();
        const route =
            routeForm
                .querySelector('[name="route"]')
                .value;
        if (!name || !phone || !route) {
            return;
        }
        alert(
            `Спасибо, ${name}!\n\n` +
            `Заявка на маршрут «${route}» принята.\n` +
            `Мы свяжемся с вами по номеру ${phone}.`
        );
        routeForm.reset();
        routeModal?.classList.remove("is-open");
    });
}
document
    .querySelectorAll('a[href$=".html"]')
    .forEach(link => {
        link.addEventListener("click", event => {
            const href =
                link.getAttribute("href");
            if (!href) {
                return;
            }
            event.preventDefault();
            document.body.classList.add(
                "page-leaving"
            );
            setTimeout(() => {
                window.location.href = href;
            }, 250);
        });
    });
document
    .querySelectorAll('a[href$=".html"]')
    .forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");
            if (!href) {
                return;
            }
            event.preventDefault();
            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-leaving");
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });