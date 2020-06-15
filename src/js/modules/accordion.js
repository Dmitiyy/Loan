export default class Accor{
    constructor(trigger, content){
        this.btn = document.querySelectorAll(trigger);
        this.content = document.querySelectorAll(content);
    }
    hide(){
        this.content.forEach(item => {
            item.style.cssText = `
                transition: 0.3s all;
                display:block;
                opacity:0;
                height:0;
                margin-top:0px;
            `;
        });
    }
    init(){
        this.hide();
        this.btn.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(this.content[i].style.opacity == '1'){
                    this.hide();
                } else {
                    this.content[i].style.marginTop = '20px';
                    this.content[i].style.opacity = '1';
                    this.content[i].style.height = this.content[i].scrollHeight + 'px';
                }
            });
        });
    }
}