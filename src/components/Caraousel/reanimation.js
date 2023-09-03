import styles from "./CarouselItem.module.css"

export const reanimateTitle = () => {
    const block1 = document.getElementById("block1")
    block1.classList.remove(styles.block1)
    void block1.offsetWidth;
    block1.classList.add(styles.block1)
}
export const reanimateSubtitle = () => {
    const block2 = document.getElementById("block2")
    block2.classList.remove(styles.block2)
    void block2.offsetWidth;
    block2.classList.add(styles.block2)
}
export const reanimateDiscoverButton = () => {
    const discover = document.getElementById("discover")
    discover.classList.remove(styles.discover)
    void discover.offsetWidth;
    discover.classList.add(styles.discover)
}
export const reanimateImage = () => {
    const image = document.getElementById("image")
    image.classList.remove(styles.image)
    void image.offsetWidth;
    image.classList.add(styles.image)
}
export const reanimatePriceText = () => {
    const priceText = document.getElementById("priceText")
    priceText.classList.remove(styles.priceText)
    void priceText.offsetWidth;
    priceText.classList.add(styles.priceText)
}
export const reanimatePriceNumber = () => {
    const priceNumber = document.getElementById("priceNumber")
    priceNumber.classList.remove(styles.priceNumber)
    void priceNumber.offsetWidth;
    priceNumber.classList.add(styles.priceNumber)
}
export const reanimate = () => {
    reanimateTitle()
    reanimateSubtitle()
    reanimateDiscoverButton()
    reanimateImage()
    reanimatePriceText()
    reanimatePriceNumber()
}