import PointerAvatar from "./PointerAvatar";

export const pointerRegistry = new Map<number, PointerAvatar>()

export function getPointerAvatar(id:number) {
    if(!pointerRegistry.has(id)) {
        pointerRegistry.set(id, new PointerAvatar(id))
    }
    return pointerRegistry.get(id)
}
