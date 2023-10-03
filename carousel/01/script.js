let pos = { top: 0, left: 0, x: 0, y: 0 };

const container = document.querySelector('#container')
container.style.cursor = 'grab';

function mouseDownHandler(e) {
    console.log('mouseDownHandler')
    container.style.cursor = 'grabbing';
    container.style.scrollSnapType = "none"
    pos = {
        left: container.scrollLeft,
        top: container.scrollTop,

        x: e.clientX,
        y: e.clientY,
    };

    container.addEventListener('mousemove', mouseMoveHandler);
    container.addEventListener('mouseup', mouseUpHandler);

}
function mouseMoveHandler(e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    container.scrollTop = pos.top - dy;
    container.scrollLeft = pos.left - dx;
}
function mouseUpHandler() {
    container.style.cursor = 'grab';
    container.style.scrollSnapType = "x mandatory"
    container.style.removeProperty('user-select');
    container.removeEventListener('mousemove', mouseMoveHandler);
    container.removeEventListener('mouseup', mouseUpHandler);
}

container.addEventListener('mousedown', mouseDownHandler);
