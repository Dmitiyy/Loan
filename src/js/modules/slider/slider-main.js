import Slider from './slider';
export default class MainSlider extends Slider {
    constructor(btns){
        super(btns);
    }
    showSlides(n){
        if(n > this.slides.length){
            this.slideIndex = 1;
        } 
        if (n < 1){
            this.slideIndex = this.slides.length;
        }

        try{
            this.blockShow.style.display = 'none';
            if(n === 3){
                setTimeout(() => {
                    this.blockShow.style.display = 'block';
                    this.blockShow.classList.add('animate__animated', 'animate__slideInUp');
                }, 3000);
            } else {
                this.blockShow.style.display = 'none';
                this.blockShow.classList.remove('animate__animated', 'animate__slideInUp');
            }
        } catch (e) {}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('animate__animated', 'animate__fadeIn', 'animate__faster');
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');
    }
    plus(n){
        this.showSlides(this.slideIndex += n);
    }
    btnNavModule(selector, num){
        selector.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plus(num); 
            });
        }); 
    }
    bindTriggers(){
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plus(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.btnNavModule(this.prevBtnMod, -1);
        this.btnNavModule(this.nextBtnMod, 1);
    }
    render(){
        if(this.container){
            try{
                this.blockShow = document.querySelector('.hanson');
            } catch (e) {}
            this.bindTriggers();
            this.showSlides(this.slideIndex);
        }
    }
}