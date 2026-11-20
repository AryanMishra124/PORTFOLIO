let accents = ["#ec4899", "#38bdf8", "#22c55e", "#f59e0b", "#a855f7"];
let backgrounds = ["#14000c", "#00101a", "#001408", "#1a1000", "#0b0014"];


function changeColor() {

   
    let newAccent = accents.shift();
    accents.push(newAccent);

    let newBackground = backgrounds.shift();
    backgrounds.push(newBackground);

  
    let page = document.getElementById("page");
    page.style.backgroundColor = newBackground;

    // Homepage
    document.getElementById("heroBox").style.borderColor = newAccent;
    document.getElementById("heroName").style.color = newAccent;
    document.getElementById("btnColor").style.backgroundColor = newAccent;
    document.getElementById("btnPortfolio").style.backgroundColor = newAccent;

    // Portfolio: navigation bar
    document.getElementById("navBar").style.borderColor = newAccent;
    document.getElementById("navColorBtn").style.backgroundColor = newAccent;
    document.getElementById("navHomeBtn").style.backgroundColor = newAccent;
    document.getElementById("footerHomeBtn").style.backgroundColor = newAccent;

    // Portfolio: introduction
    document.getElementById("introName").style.color = newAccent;

    // Portfolio: cards
    document.getElementById("about").style.borderColor = newAccent;
    document.getElementById("education").style.borderColor = newAccent;
    document.getElementById("skills").style.borderColor = newAccent;
    document.getElementById("softskills").style.borderColor = newAccent;
    document.getElementById("interests").style.borderColor = newAccent;
    document.getElementById("activities").style.borderColor = newAccent;
    document.getElementById("contact").style.borderColor = newAccent;
}



function showPortfolio() {

    // Hide the homepage
    document.getElementById("home").style.display = "none";

   
    let portfolio = document.getElementById("portfolio");
    portfolio.style.height = "auto";
    portfolio.style.overflow = "visible";
    portfolio.style.opacity = "1";

    
    let introName = document.getElementById("introName");
    introName.style.opacity = "1";
    introName.style.letterSpacing = "2px";
}



function showHome() {

   
    let portfolio = document.getElementById("portfolio");
    portfolio.style.height = "0";
    portfolio.style.overflow = "hidden";
    portfolio.style.opacity = "0";

  
    let introName = document.getElementById("introName");
    introName.style.opacity = "0";
    introName.style.letterSpacing = "25px";

   
    document.getElementById("home").style.display = "flex";
}