function average(){
    let inputPhy = document.getElementById("phy").value;
    let inputChe = document.getElementById("che").value;
    let inputBio = document.getElementById("bio").value;

    if ((inputPhy=="")||(inputChe=="")||(inputBio=="")){
        alert("Hãy nhập đầy đủ điểm các môn!");
        return;
    }

    let phy = parseFloat(inputPhy);
    let che = parseFloat(inputChe);
    let bio = parseFloat(inputBio);

    if ((phy<0)||(phy>10)) {
        alert("Điểm Vật lý không hợp lệ. Hãy nhập lại!");
        return;
    }

    if ((che<0)||(che>10)) {
        alert("Điểm Hóa học không hợp lệ. Hãy nhập lại!");
        return;
    }
    if ((bio<0)||(bio>10)) {
        alert("Điểm Sinh học không hợp lệ. Hãy nhập lại!");
        return;
    }

    let average = (phy+che+bio)/3;
    alert("Điểm trung bình của bạn là: " + average);
}