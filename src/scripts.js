/**
 * Header
 */
const header = document.querySelector("[data-header]");
const open_search = document.querySelector("[data-open-search]");
const close_search = document.querySelector("[data-close-search]");
const div_search = document.querySelector("[data-div-search]");
const input_search = div_search.querySelector("[data-input-search]");

// scroll header
window.addEventListener("scroll", () => {
    if (scrollY >= 50) {
        header.classList.add("!border-[var(--border-color)]");
        header.classList.add("fixed");
        header.classList.remove("relative");
    } else {
        header.classList.remove("!border-[var(--border-color)]");
        header.classList.remove("fixed");
        header.classList.add("relative");
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