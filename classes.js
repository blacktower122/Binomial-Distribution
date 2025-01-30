class Ele {

    constructor(element, className) {
   
     this.element = element;
   
     this.className = className;
   
    }
   
   
   
    create() {
   
     const newElement = document.createElement(this
      .element);
   
     newElement.classList.add(this.className);
   
     return newElement;
   
    }
   
   }