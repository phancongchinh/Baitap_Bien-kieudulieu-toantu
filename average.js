function average(){
    let inputvl = document.getElementById("phy").value;
    let inputhh = document.getElementById("che").value;
    let inputsh = document.getElementById("bio").value;

   if ((inputvl==null)||(inputhh==null)||(inputsh=null)) {
        alert("Hãy nhập đầy đủ điểm các môn!");
    } else {

    let vl = parseFloat(inputvl);
    let hh = parseFloat(inputvl);
    let sh = parseFloat(inputvl);

    if ((vl<0)||(vl>10)) {
        alert("Điểm Vật lý không hợp lệ. Hãy nhập lại!");
        return;
    }

    if ((hh<0)||(hh>10)) {
        alert("Điểm Hóa học không hợp lệ. Hãy nhập lại!");
        return;
    }
    if ((sh<0)||(sh>10)) {
        alert("Điểm Sinh học không hợp lệ. Hãy nhập lại!");
        return;
    }
    let average = (vl+hh+sh)/3;
    alert("Điểm trung bình của bạn là: " + average);
}
}