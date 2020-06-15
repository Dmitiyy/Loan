import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Form from './modules/form';
import Mask from './modules/mask';
import Accor from './modules/accordion';
import Download from './modules/download';

window.addEventListener("DOMContentLoaded", function() {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const moduleSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next',
        prevMod: '.prevmodule',
        nextMod: '.nextmodule'
    });
    moduleSlider.render();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    const showupSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showupSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();

    new Mask('.inp-phone').init();

    new Accor('.plus__content', '.msg').init();

    new Download('.download').init();
});