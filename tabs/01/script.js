const hash = window.location.hash;
const activeSection = document.querySelector(hash);
const container = document.querySelector(".tab-content-wrapper");
const sections = container.querySelectorAll("section[id]");

container.scrollTo(0, activeSection.offsetTop - 70);

container.addEventListener("scroll", navHighlighter);
const tabActive = document.querySelector('.tabs_active');
function navHighlighter() {

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - sectionHeight / 1.5;
        const sectionId = current.getAttribute("id");
        if (
            container.scrollTop > sectionTop &&
            container.scrollTop <= sectionTop + sectionHeight
        ) {

            const anchor = document.querySelector(".tabs a[href='#" + sectionId + "']");
            anchor.classList.add("active");
            tabActive.style.setProperty("--tab-height", anchor.offsetHeight + "px");
            tabActive.style.setProperty("--tab-top", anchor.offsetTop + "px");
        } else {
            document.querySelector(".tabs a[href='#" + sectionId + "']").classList.remove("active");
        }
    });
}