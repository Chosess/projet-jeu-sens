 let test = document.querySelectorAll(".test>div");

 for(let x = 1; x < 14; x++){
    test[x-1].style.position = "absolute";
    test[x-1].style.left = ((x * 10) - 20) + "%";
    test[x-1].style.transform = "rotate(" + -(x-7) * 10 + "deg)";
 }