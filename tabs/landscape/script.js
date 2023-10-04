window.addEventListener('load', () => {
    const hash = window.location.hash;
    const container = document.querySelector(".tab-content-wrapper");
    const sections = container.querySelectorAll("section[id]");
    const tabActive = document.querySelector('.tabs_active');
    const currentBtn = document.querySelector(".tabs button[href='" + hash + "']")
    if (currentBtn) {
        const activeSection = document.querySelector(hash);
        selectTab(currentBtn, activeSection)
        currentBtn.parentNode.parentNode.scrollLeft = currentBtn.offsetLeft;
    } else {
        sections[0].classList.add("active");
        const btn = document.querySelector(".tabs button[href='#" + sections[0].getAttribute("id") + "']");
        selectTab(btn, sections[0])
    }


    function selectTab(anchor, section) {
        const activeAnchor = document.querySelector(".tabs button.active");
        if (activeAnchor) activeAnchor.classList.remove("active");
        anchor.classList.add("active");
        section.classList.add("active");
        tabActive.style.setProperty("--tab-width", anchor.offsetWidth + "px");
        tabActive.style.setProperty("--tab-left", anchor.offsetLeft + "px");
        tabActive.style.setProperty("--tab-height", anchor.offsetHeight + "px");
    }

    sections.forEach(current => {
        const sectionId = current.getAttribute("id");
        const btn = document.querySelector(".tabs button[href='#" + sectionId + "']");
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const existActive = current.parentNode.querySelector(".active");
            if (existActive) existActive.classList.remove("active");
            selectTab(e.target, current);
        });
    });
})