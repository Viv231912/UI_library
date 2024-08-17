class Tabs{
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        //add tabs
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
               this.toggleTabs(e);
               this.toggleContent(e);
            })
        });
    }
    //toggle tabs
    toggleTabs(e){
        //remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        //add new active class to clicked tab
        e.target.classList.add('active');
    }
    //toggle content
    toggleContent(e){
        //remove current active classes for content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        })
        //add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector)
        content.classList.add('active')

    }
}

export default Tabs