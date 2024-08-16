// function Tooltip(element){
//     this.element = element;
//     this.message = element.getAttribute('data-message');
// }

// Tooltip.prototype.init = () =>{
//     const tip = document.createElement('div');
//         tip.classList.add('tip');
//         tip.textContent = this.message;
//         document.body.appendChild(tip);
// } 

class Tooltip{
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message');
        console.log("Tooltip created : ", this.message)
    }
    init(){
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);
        
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        })

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active')
        })
    
    }


}  

export default Tooltip