'use strict';

const DomElement = function(valueSelector, valueHeight, valueWidth, valueBg, valueFontSize){
    this.selector = valueSelector;
    this.height = valueHeight+'px';
    this.width = valueWidth + 'px';
    this.bg = valueBg;
    this.fontSize = valueFontSize + 'px';
    this.addHTML = function(str){
        if(this.selector[0] === '.'){
            let div = document.createElement('div');
            let selectorCopy =this.selector.slice(1);
            div.className = selectorCopy;
            document.body.appendChild(div);
            
        }
        else if(this.selector[0] === '#'){
            let selectorCopy =this.selector.slice(1);
            let elementNew = document.createElement('p');
            elementNew.id = selectorCopy;
            elementNew.textContent = str;
            elementNew.style.cssText = `height : ${this.height}; width : ${this.width}; background : ${this.bg}; font-size : ${this.fontSize}`;
            document.body.appendChild(elementNew);
            console.dir(elementNew);
        }
        else{
            alert('Введи, начиная с # или . ');
        }
    }
}
let text = prompt('text');
let newElement1 = new DomElement('#block', 500, 500, 'blue', 150);
newElement1.addHTML(text);
let newElement2 = new DomElement('.block', 10, 8, 'blue', 17);
newElement2.addHTML(text);