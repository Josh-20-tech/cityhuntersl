let hed = document.querySelector(".one");
let isShow = true;
function drop() {
    if(isShow){
         hed.style.display = "block";
         isShow = false;
    }else{
        hed.style.display = "none";
        isShow = true;
    }
   
}