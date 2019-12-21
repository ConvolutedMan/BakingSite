
const checkBoxList = document.querySelectorAll(".checkbox");


const checkBoxOn = element =>{
    if(element.style.backgroundColor === 'lightgreen'){
        
        element.innerHTML='<img src=""/>';
        element.style.backgroundColor =  'rgb(' + 255 + ', ' + 255 + ', ' + 230 + ')';
    } else {
        element.innerHTML='<img src="../../resources/images/check-solid.svg"/>';
        element.style.backgroundColor = 'lightgreen';
        
    };
};

const eachToggle = () =>{
    checkBoxList.forEach(element =>{
    
    element.addEventListener('click',   () =>{
        checkBoxOn(element) ;
    });
   
});
}

eachToggle();


