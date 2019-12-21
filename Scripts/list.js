
//This is just the file that contains all of the pages available on the site//


class allRecipes{
    constructor(name, site, background){
        this._name = name;
        this._site= "../../"+site;
        this._background = "../../" + background;
        
        
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
    
   
} 

class Dessert extends allRecipes{
    constructor(name, site, background){
    super(name, site, background);
    this.type = "Dessert"
    }
}

class Appetizer extends allRecipes{
    constructor(name, site){
    super(name, site);
    this.type = "Appetizer"
    }
}

class Entree extends allRecipes{
    constructor(name, site){
    super(name, site);
    this.type = "Entree"
    }
}

 const comprehensiveList =[];
 const dessertList = [];
 const appetizerList = [];
 const entreeList = [];

// Desserts //
const cookies = new Dessert('Chocolate Chip Cookies', "Desserts/Chocolate_Chip_Cookies/chocChipCookies.html","Desserts/Chocolate_Chip_Cookies/specificresources/images/FinalV1.jpg");
const brownies = new Dessert('Brownies', "Desserts/Brownies/chocolateBrownies.html","");
const cheesecake = new Dessert('Cheesecake', "Desserts/Cheesecake/cheesecake.html","");
const cookieBars = new Dessert('Cookie Bars', "Desserts/Cookie_Bars/cookieBars.html","");
const creamPuffs = new Dessert('Cream Puffs', "Desserts/Cream_Puffs/creamPuffs.html","");
const crepes = new Dessert('Crepes', "Desserts/Crepes/crepes.html","");
const fudge = new Dessert('Fudge', "Desserts/Fudge/fudge.html","");
const lavaBabyCake = new Dessert('Lava Baby Cakes', "Desserts/Lava_Baby_Cake/lavaBabyCake.html","");
const mintBrownies = new Dessert('Mint Brownies', "Desserts/MintBrownies/mintbrownies.html","");
const raisinCookies = new Dessert('Raisin Cookies', "Desserts/Raisin_Cookies/raisinCookies.html","");
const snackCake = new Dessert('Snack Cake', "Desserts/SnackCake/snackcake.html");
const tuxedoBrownies = new Dessert('Tuxedo Brownies', "Desserts/Tuxedo_Brownies/tuxedoBrownies.html","");

// Appetizers //
const cheeseball = new Appetizer('Cheeseball', "Appetizers/CheeseBall/cheeseball.html","");
const layerDip = new Appetizer('7 Layer Bean Dip', "Appetizers/7_Layer_dip/7LayerDip.html","");
const BBQWings = new Appetizer('BBQ Wings', "Appetizers/BBQ_Wings/BBQWings.html","");
const buffaloDip = new Appetizer('Buffalo Dip', "Appetizers/Buffalo_Dip/buffaloDip.html","");
const greenChiliCheeseDip = new Appetizer('Green Chili Cheese Dip', "Appetizers/Green_Chili_Cheese_Dip/greenChiliCheeseDip.html","");
const mormonCaviar = new Appetizer('Mormon Caviar', "Appetizers/Mormon_Caviar/mormonCaviar.html","");



// Entrees //
const fajitas = new Entree('Beef Fajitas', "Entrees/Beef_Fajitas/beefFajitas.html","");
const angelHairPasta = new Entree('Angel Hair Pasta and Chicken', "Entrees/Angel_Pasta_Chicken/angelHairPastaChicken.html","");
const biscuitsGravy = new Entree('Biscuits and Gravy', "Entrees/Biscuits_Gravy/biscuitsGravy.html","");
const chili = new Entree('Chili', "Entrees/Chili/chili.html","");
const clamChowder = new Entree('Clam Chowder', "Entrees/Clam_Chowder/clamChowder.html","");
const cubanPorkChops = new Entree('Cuban Pork Chops', "Entrees/Cuban_Pork_Chops/cubanPorkChops.html","");
const enchiladas = new Entree('Enchiladas', "Entrees/Enchilladas/enchiladas.html","");
const groundBeefStroganoff = new Entree('Ground Beef Stroganoff', "Entrees/Ground_Beef_Stroganoff/beefStroganoff.html","");
const hamScallopedPotatoes = new Entree('Ham and Scalloped Potatoes', "Entrees/Ham_Scalloped_Potatoes/hamAndScallopedPotatoes.html","");
const hamburgerCasserole = new Entree('Hamburger Casserole', "Entrees/Hamburger_Casserole/hamburgerCasserole.html","");
const hasansChicken = new Entree('Hasans Chicken in the Oven', "Entrees/Hasans_Chicken_Oven/hasansChickenOven.html","");
const meatballs = new Entree('Meatballs', "Entrees/Meatballs/meatballs.html","");
const pepperSteak = new Entree('Pepper Steak', "Entrees/Pepper_Steak/pepperSteak.html","");
const porkChopsRice = new Entree('Pork Chops and Rice', "Entrees/Pork_Chops_Rice/porkChopsRice.html","");
const potRoastedPork = new Entree('Pot Roasted Pork', "Entrees/Pot_Roasted_Pork/potRoastedPork.html","");
const roastChicken = new Entree('Roast Chicken', "Entrees/Roast_Chicken/roastChicken.html","");
const seafoodChowder = new Entree('Seafood Chowder', "Entrees/Seafood_Chowder/seafoodChowder.html","");
const shepherdsPie = new Entree('Shepherds Pie', "Entrees/Shepherds_Pie/shepherdPie.html","");
const spanishRice = new Entree('Spanish Rice', "Entrees/Spanish_Rice/spanishRice.html","");



dessertList.push(cookies , brownies, cheesecake, cookieBars, creamPuffs, crepes, fudge, lavaBabyCake, mintBrownies,raisinCookies, snackCake, tuxedoBrownies);
appetizerList.push(cheeseball, layerDip, BBQWings, buffaloDip, greenChiliCheeseDip, mormonCaviar);
entreeList.push(fajitas, angelHairPasta, biscuitsGravy, chili, clamChowder, cubanPorkChops, enchiladas, groundBeefStroganoff, hamScallopedPotatoes, hamburgerCasserole, hasansChicken, meatballs, 
    pepperSteak, porkChopsRice, potRoastedPork, roastChicken, seafoodChowder, shepherdsPie, spanishRice);
comprehensiveList.push(cheeseball, layerDip, BBQWings, buffaloDip, greenChiliCheeseDip, mormonCaviar,cookies , brownies, cheesecake, cookieBars, creamPuffs, crepes, 
    fudge, lavaBabyCake, mintBrownies,raisinCookies, snackCake, tuxedoBrownies, fajitas, angelHairPasta, biscuitsGravy, chili, clamChowder, cubanPorkChops, enchiladas, groundBeefStroganoff, hamScallopedPotatoes, hamburgerCasserole, hasansChicken, meatballs, 
    pepperSteak, porkChopsRice, potRoastedPork, roastChicken, seafoodChowder, shepherdsPie, spanishRice);



//all recipes//
/*
const source = document.getElementById('recipeTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
    recipeArray: comprehensiveList
};

const compiledHtml = template(context);

const displayElements = document.getElementById('total');
displayElements.innerHTML = compiledHtml;
*/


//appetizers //
const sourceApp = document.getElementById('appetizerTemp').innerHTML;
const templateApp = Handlebars.compile(sourceApp);

const contextApp = {
    appArray: appetizerList
};

const compiledHtmlApp = templateApp(contextApp);

const displayElementsApp = document.getElementById('appetizer');
displayElementsApp.innerHTML = compiledHtmlApp;


//entrees//
const sourceEntree = document.getElementById('entreeTemp').innerHTML;
const templateEntree = Handlebars.compile(sourceEntree);

const contextEntree = {
    entreeArray: entreeList
};

const compiledHtmlEntree = templateEntree(contextEntree);

const displayElementsEntree = document.getElementById('entree');
displayElementsEntree.innerHTML = compiledHtmlEntree;


//desserts//
const sourceDes = document.getElementById('dessertTemp').innerHTML;
const templateDes = Handlebars.compile(sourceDes);

const contextDes = {
    desArray: dessertList
};

const compiledHtmlDes = templateDes(contextDes);

const displayElementsDes = document.getElementById('dessert');
displayElementsDes.innerHTML = compiledHtmlDes;



//design stuff//
const myPicks = document.querySelectorAll(".myPicks");
const appPicks = document.querySelectorAll(".appetizers");
const entreePicks = document.querySelectorAll(".entrees");
const dessertPicks = document.querySelectorAll(".desserts");
console.log(myPicks.length);
console.log(myPicks);
console.log(comprehensiveList.length);
//total//
for (let i = 0; i < myPicks.length; i++){
    const element = comprehensiveList[i];
    
    const backgroundPic =  element.background;
    
    myPicks[i].style.textAlign =  'center';
    myPicks[i].style.backgroundImage = `url(${backgroundPic})`;
    myPicks[i].style.backgroundSize = `cover`;
    myPicks[i].style.backgroundPosition = `center`;
    myPicks[i].style.height = '150px';
    myPicks[i].style.margin = '10px';
       
} 

//appetizers//
for (let i = 0; i < appPicks.length; i++){
    const element = appetizerList[i];
    const backgroundPic =  element.background;
    
    appPicks[i].style.textAlign =  'center';
    appPicks[i].style.backgroundImage = `url(${backgroundPic})`;
    appPicks[i].style.backgroundSize = `cover`;
    appPicks[i].style.backgroundPosition = `center`;
    appPicks[i].style.height = '150px';
    appPicks[i].style.margin = '10px';
    
   
} 

//entrees//
for (let i = 0; i < entreePicks.length; i++){
    const element = entreeList[i];
    const backgroundPic =  element.background;
    
    entreePicks[i].style.textAlign =  'center';
    entreePicks[i].style.backgroundImage = `url(${backgroundPic})`;
    entreePicks[i].style.backgroundSize = `cover`;
    entreePicks[i].style.backgroundPosition = `center`;
    entreePicks[i].style.height = '150px';
    entreePicks[i].style.margin = '10px';
    
   
} 

//desserts//
for (let i = 0; i < dessertPicks.length; i++){
    const element = dessertList[i];
    const backgroundPic =  element.background;
    
    dessertPicks[i].style.textAlign =  'center';
    dessertPicks[i].style.backgroundImage = `url(${backgroundPic})`;
    dessertPicks[i].style.backgroundSize = `cover`;
    dessertPicks[i].style.backgroundPosition = `center`;
    dessertPicks[i].style.height = '150px';
    dessertPicks[i].style.margin = '10px';
    
   
} 


