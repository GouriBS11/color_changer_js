const btn = document.getElementById("button");

//arrow function
let randomcolor = () => {
    let val="123456789ABCDEFGHIJKLM";
    let hash = "#";

    for(let i = 0; i < 6; i++){

        hash = hash + val[Math.floor(Math.random() * 16)];

    }
    return hash;

};
//console.log(randomcolor());

function changecolor(){
    document.body.style.backgroundColor = randomcolor();
}

btn.addEventListener("click", changecolor);