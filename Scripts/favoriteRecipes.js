class favoriteRecipes{
    constructor(name, site ,background, difficulty, time){
        this._name = name;
        this._site= site;
        this._background = background;
        this._difficulty = difficulty;
        this._time = time;
    }
    get name() {
        return this._name;
    }
    get site() {
        return this._site;
    }
    get background() {
        return this._background;
    }
    get difficulty() {
        return this._difficulty;
    }
    get time() {
        return this._time;
    }
} 

const favList = [];
const cookies = new favoriteRecipes('Chocolate Chip Cookies', "Desserts/Chocolate_Chip_Cookies/chocChipCookies.html", "Desserts/Chocolate_Chip_Cookies/specificresources/images/FinalV1.jpg", "Intermediate", "60 minutes")
const cheeseball = new favoriteRecipes('Cheeseball', "Appetizers/CheeseBall/cheeseball.html", "", "Intermediate", "45 minutes")
const fajitas = new favoriteRecipes('Beef Fajitas', "Entrees/Beef_Fajitas/beefFajitas.html", "", "Easy", "4-5 hours")

favList.push(cookies);
favList.push(cheeseball);
favList.push(fajitas);

const myPicks = document.querySelectorAll(".myPicks");


for (let i = 0; i < myPicks.length; i++){
    const element = favList[i];
    const location = "../../"+ element.site;
    const backgroundPic = "../../"+ element.background;
    myPicks[i].style.textAlign =  'center';
    myPicks[i].style.backgroundImage = `url(${backgroundPic})`;
    myPicks[i].style.backgroundSize = `cover`;
    myPicks[i].style.backgroundPosition = `center`;
    myPicks[i].innerHTML = ` <a href=${location}> <h3>${element.name}</h3>    <p>${element.difficulty}</p>     <p>${element.time}</p> </a>`;
   
} 





console.log(favList);
console.log(favList[0].name)