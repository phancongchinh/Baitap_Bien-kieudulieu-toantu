function circle(){
    let inputRadius = document.getElementById("radius").value;

    if (inputRadius=="") {
        alert("Hãy nhập bán kính hình tròn!");
        return;
    }
    let r = parseFloat(inputRadius);
    let c = 2 * 3.14 * r;
    let s = 3.14 * Math.pow(r,2);
    alert("Chu vi của hình tròn bán kính " + r + " là " + c + ". \r\nDiện tích của hình tròn bán kính " + r + " là " + s);
}