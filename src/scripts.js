/**
 * Header & Btn Back To Up
 */
const header = document.querySelector("[data-header]");
const open_search = document.querySelector("[data-open-search]");
const close_search = document.querySelector("[data-close-search]");
const div_search = document.querySelector("[data-div-search]");
const input_search = div_search.querySelector("[data-input-search]");
const btn_back_to_up = document.querySelector("[data-btn-back-to-up]");

// scroll header & btn back to up
window.addEventListener("scroll", () => {
    if (scrollY >= 50) {
        // header
        header.classList.add("!border-[var(--border-color)]");
        header.classList.add("fixed");
        header.classList.remove("relative");

        // btn back to up
        btn_back_to_up.classList.add("!opacity-[1]");
    } else {
        // header
        header.classList.remove("!border-[var(--border-color)]");
        header.classList.remove("fixed");
        header.classList.add("relative");
        
        // btn back to up
        btn_back_to_up.classList.remove("!opacity-[1]");
    }
});

// run search
open_search.addEventListener("click", () => {
    div_search.classList.add("top-[0px]");
    div_search.classList.remove("top-[80px]");

    input_search.focus();
});

close_search.addEventListener("click", () => {
    div_search.classList.remove("top-[0px]");
    div_search.classList.add("top-[80px]");
});

/**
 * Swiper Cards
 */
const swiper = document.querySelectorAll("[data-swiper]");

swiper.forEach(ele => {
    const swiper_cards = ele.querySelector("[data-swiper-cards]");
    const left_scroll = ele.querySelector("[data-left-scroll]");
    const right_scroll = ele.querySelector("[data-right-scroll]");

    function updateScrollAuto()
    {
        const scrollLeft = swiper_cards.scrollLeft;
        const maxWidth = swiper_cards.scrollWidth - swiper_cards.clientWidth;

        if (scrollLeft <= 0) {
            setTimeout(() => {
                swiper_cards.scrollBy({
                    left: swiper_cards.clientWidth,
                    behavior: "smooth"
                });
            }, 8000);
        } else if (scrollLeft >= (maxWidth - 1)) {
            setTimeout(() => {
                swiper_cards.scrollBy({
                    left: -swiper_cards.clientWidth,
                    behavior: "smooth"
                });
            }, 8000);
        }
    }

    window.addEventListener("load", () => {
        setTimeout(() => {
            swiper_cards.scrollBy({
                left: swiper_cards.clientWidth,
                behavior: "smooth"
            });
        }, 8000);
    });

    swiper_cards.addEventListener("scroll", updateScrollAuto);

    left_scroll.addEventListener("click", () => {
        swiper_cards.scrollBy({
            left: -swiper_cards.clientWidth,
            behavior: "smooth"
        });
    });

    right_scroll.addEventListener("click", () => {
        swiper_cards.scrollBy({
            left: swiper_cards.clientWidth,
            behavior: "smooth"
        });
    });
});