export default class Difference{
    constructor(oldOfficer, newOfficer, items){
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e) {}
    }
    bindTriggers(selector, count, item){
        selector.querySelector('.plus').addEventListener('click', () => {
            if(count !== item.length - 2) {
                item[count].style.display = 'flex';
                count++;
            } else {
                item[count].style.display = 'flex';
                item[item.length - 1].remove();
            }
        });
    }
    hideItems(selector){
        selector.forEach((item, i, arr) => {
            if(i !== arr.length - 1){
                item.style.display = 'none';
            }
        });
    }
    init(){
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems);
            this.bindTriggers(this.newOfficer, this.newCounter, this.newItems);
        } catch (e) {}
    }
}