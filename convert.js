function convert(){
    let inputCel = document.getElementById("doc").value;

    if (inputCel==""){
        alert("Hãy nhập nhiệt độ cần đổi!");
        return;
    }

    let c = parseFloat(inputCel);

    if (c<-273.15) {
        alert("Nhiệt độ không hợp lệ. Hãy đảm bảo rằng nhiệt độ nhập vào cần lớn hớn Độ không tuyệt đối!");
        return;
    }
    let far = c*9/5+32;
    document.getElementById("dof").value = far;
    alert(c + " độ C tương đương với " + far + " độ F." )
}