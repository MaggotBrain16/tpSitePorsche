let price = 10000;
document.getElementById("price").innerHTML=price;
function changeImg(color){
    let img = document.getElementById('imgPor');
   src = '../assets/colorP/red.jpeg'
    switch(color){
        case 'yellow': img.src = '../assets/colorP/yellow.jpeg';
        break;
        case 'blue': img.src = '../assets/colorP/blue.jpeg';
        break;
        case 'red': img.src = '../assets/colorP/red.jpeg';
        break
        default :img.src = '../assets/colorP/blue.jpeg';
    }
    let optJantes = document.getElementById("jantesSport");

    console.log(optJantes.target.value)
}
