import { pointerRegistry } from "./pointerRegistry"

export default class PointerAvatar {
    public div = document.createElement('div')
    constructor(private _id:number) {
        this.div.className = 'circle'
        document.body.appendChild(this.div)
    }
    move(x:number, y:number) {
        this.div.style.top =  y + 'px'
        this.div.style.left = x + 'px'
    }
    resize(size:number) {
        this.div.style.transform = `scale(${size * 2})`
    }
    dispose() {
        this.div.style.setProperty('animation-name', 'grow')
        this.div.style.setProperty('animation-duration', '1s')
        this.div.style.setProperty('animation-timing-function', 'ease-out')
        this.div.addEventListener('animationend', (ev) => {
            document.body.removeChild(this.div)
        })
        pointerRegistry.delete(this._id)
    }
}
