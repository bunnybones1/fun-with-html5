import { getPointerAvatar } from "./pointerRegistry";

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('pointerenter', (ev) => {
    getPointerAvatar(ev.pointerId).move(ev.clientX, ev.clientY)
})
document.addEventListener('pointermove', (ev) => {
    const p = getPointerAvatar(ev.pointerId)
    p.move(ev.clientX, ev.clientY)
    p.resize(ev.pressure)
})
document.addEventListener('pointerdown', (ev) => {
    getPointerAvatar(ev.pointerId).move(ev.clientX, ev.clientY)
})
document.addEventListener('pointerleave', (ev) => {
    getPointerAvatar(ev.pointerId).dispose()
})
const test3d = document.createElement('div')
test3d.className = 'test3d'
document.body.appendChild(test3d)
window.addEventListener("deviceorientation", function(e) {
    test3d.style.transform =
      "rotateY(" + ( -e.gamma ) + "deg)" +
      "rotateX(" + e.beta + "deg) " +
      "rotateZ(" +  ( e.alpha - 180 ) + "deg) ";
  });