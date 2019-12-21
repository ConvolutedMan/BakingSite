const button = document.querySelector(".button");
const menu = document.querySelector(".dropdownContent");

const showMenu = () =>{
    if(menu.style.display==='none'){
        console.log('not showing');
        menu.style.display = 'block';
    } else{
        console.log('showing');
        menu.style.display = 'none';
    }
};

button.addEventListener('click', showMenu);