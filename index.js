function afterLoad(){
    
}
function onClick(){
    
    var statePlaceholder = document.getElementById("showState");
    if(event.target.getAttribute('title')===statePlaceholder.innerText){
        event.target.style.fill='green';
    }
    else{
        var root = this.event.target;
         event.target.style.fill='red';
        setTimeout(() => {
            root.style.fill="rgb(5, 12, 44)";
            // console.log("hola");
        }, 1000);
    }
}
function onStart(){
    var map = document.getElementsByClassName("mapImg")[0];
    map.style.display = 'block';
    var states = ['Alabama','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    var statePlacholder = document.getElementById("showState");
    var btn = document.getElementsByTagName("button")[0];
    btn.innerText = "Next";
    var randSt = Math.round((Math.random()*48) +0);
    statePlacholder.innerText = states[randSt];
}
