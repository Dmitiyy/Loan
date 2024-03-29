export default class Slider{
    constructor ({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate,
        autoplay,
        prevMod,
        nextMod
        } = {}) {
        this.container = document.querySelector(container);
        try{
            this.slides = this.container.children;
        } catch (e){}
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.nextBtnMod = document.querySelectorAll(nextMod);
        this.prevBtnMod = document.querySelectorAll(prevMod);
    }
}