const img = document.querySelectorAll('.img__principal');
const line = document.getElementById("line");
let index = 0;






for(let i = 0; i < img.length; i++){
    img[i].style.display = 'none';
    img[0].style.display = 'block';
}

const int = setInterval(() => {
    index++;
    if(index > img.length-1){
        index = 0;
    }

    for(let i = 0; i < img.length; i++){
        img[i].style.display = 'none';
    }
    img[index].style.display = 'block';

}, 5000);




