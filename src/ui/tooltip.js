function Tooltip(element){
    this.element = element;
    this.message = element.getAttribute('data-message');
}

Tooltip.prototype.init = () =>{
    const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        document.body.appendChild(tip);
} 

export { Tooltip as default }