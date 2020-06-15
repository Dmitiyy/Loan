export default class Mask{
    constructor(selector){
        this.selector = document.querySelector(selector);
    }
    init(){
        try {
            let phoneMask = IMask(
                this.selector, {
                      mask: '+{1}(000)000-0000'
                });
        } catch (e) {}
    }
}