//elemntos que mejorar 
// longitud del dispay:
//quitar el igual de la pantalla cuando se calcula
//mejorar la funcion del porcetanje.
//limitar la entrada de "." pero permitir que esté en las partes de la operacion




class Calculator{
    constructor(displayElement) {
        this.displayElement = displayElement
        this.specialChars = ["%", "*", "/", "-", "+"]
        this.clear();
        // this.displayMax = 16
        
    }

    clear() {
        this.display = 0;
        this.redraw();  
        
    }
    
    

    //funcion para volver a renderizar
    redraw() {
        this.displayElement.innerHTML = this.display;  
    }
     
    // funcion para añadir el numero 

    appendNumber(number) {

        // if( number === "." && this.display.includes(".")) return
      
         this.display = this.display === 0 ? number : this.display.toString() + number;
        
        this.redraw(); 
    }

    //funcion para apagar

    deleteChars() {
        if (this.display === 0) return;
        this.display = this.display.toString().slice(0, -1);
        
        this.redraw(); 

    }

    ///agregar operaciones y calcular. 
    operation(btnvalue) {
        if (this.display === 0 && this.specialChars.includes(btnvalue)) return; 
            
    
         else if (btnvalue === "=" && this.display != 0) {
            
            this.calc();
            
        } 
   
       this.display=  this.display.toString() + btnvalue
        this.redraw(); 

    }

    calc() {
        
        this.display = eval(this.display.toString().replace("%", "/100"))
        console.log('esto es lo que sale en el display',this.display)
    }
   
}

//Seleccionando los botones 

const displayElement = document.querySelector(".display");
const clearButton = document.querySelector("[data-clear]");
const NumberButtons = document.querySelectorAll("[data-number]");
const deletebutton = document.querySelector("[data-delete]");
const operationsButtons = document.querySelectorAll("[data-operation]");
// const LimitarChart = document.getElementById ("inputLimited")




//redefiniendo el objeto. 

Calculator = new Calculator(displayElement);


//escuchando los eventos 

clearButton.addEventListener('click', () => {

    Calculator.clear();
});



NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerHTML);
    })
})
    
deletebutton.addEventListener('click', () => {
    
    Calculator.deleteChars();
});

operationsButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        Calculator.operation(button.innerHTML);
        
    })
})




// LimitarChart.addEventListener('funcion', () => {
    
//     Calculator.limitarCaracteres();
// })





