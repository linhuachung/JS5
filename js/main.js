var buttonCount = document
  .getElementById("btnTinh")
  .addEventListener("click", function (e) {
    e.preventDefault();
    
    var diemChuan = parseFloat(document.getElementById("inputDiemChuan").value);
    var diemMon1 = parseFloat(document.getElementById("inputMon1").value);
    var diemMon2 = parseFloat(document.getElementById("inputMon2").value);
    var diemMon3 = parseFloat(document.getElementById("inputMon3").value);
    var khuVuc = document.getElementById("inputKhuVuc").value;
    var doiTuong =document.getElementById("inputDoiTuong").value;

    var diemTong = (diemMon1 + diemMon2 + diemMon3);
    const khuVucA = 2;
    const khuVucB = 1;
    const khuVucC = 0.5;

    const doiTuong1 = 2.5;
    const doiTuong2 = 1.5;
    const doiTuong3 = 1;

    if(diemMon1 > 0  && diemMon2 > 0 && diemMon3 > 0 ){
        if(khuVuc != "" && doiTuong !=""){
          if(khuVuc == "A" && doiTuong == "1"){
            diemTong = diemTong + doiTuong1 + khuVucA;
            if( diemTong > diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}

          }else if(khuVuc == "A" && doiTuong == "2"){
            diemTong = diemTong + doiTuong2 + khuVucA;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "A" && doiTuong == "3"){
            diemTong = diemTong + doiTuong3 + khuVucA;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "B" && doiTuong == "1"){
            diemTong = diemTong + doiTuong1 + khuVucB;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "B" && doiTuong == "2"){
            diemTong = diemTong + doiTuong2 + khuVucB;
            if( diemTong = diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "B" && doiTuong == "3"){
            diemTong = diemTong + doiTuong3 + khuVucB;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "C" && doiTuong == "1"){
            diemTong = diemTong + doiTuong1 + khuVucC;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "C" && doiTuong == "2"){
            diemTong = diemTong + doiTuong2 + khuVucC;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else if(khuVuc == "C" && doiTuong == "3") {
            diemTong = diemTong + doiTuong3 + khuVucC;
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }else {
            if( diemTong >= diemChuan){
              alert ("Chúc mừng bạn điểm tổng của bạn là: " + diemTong);
            }else{alert ("Bạn đã rớt");}
          }
        }else{alert("Vui lòng nhập khu vực hoặc đối tượng phù hợp")}
    }else alert("Rớt");
  });

  var buttonKw = document
  .getElementById("btnTinhKw");
  buttonKw.addEventListener("click",function(e) {
    e.preventDefault();
    var name = document.getElementById("inputName").value;
    var kw = parseInt( document.getElementById("inputKw").value);
    var kw1 = kw;
    var kw2 = kw - 50;
    var kw3 = kw - 100;
    var kw4 = kw - 200;
    var kw5 = kw - 350;
    // var tienDien = 0;
    var tienDien1 = kw1 * 500;
    var tienDien2 = (kw - kw2)*500 + (kw2 * 650);
    var tienDien3 = (kw - (kw3 + 50 ))*500 + (kw - (kw3 + 50))*650  + (kw3 * 850);
    var tienDien4 = (kw - (kw4 + 150))*500 + (kw - (kw4 + 150))*650 + (kw - (kw4 + 100))*850 + (kw4 * 1100);
    var tienDien5 = (kw - (kw5 + 300)) * 500+(kw - (kw5 + 300)) * 650+(kw - (kw5 + 250)) * 850+(kw - (kw5 + 200)) * 1100 + (kw5 * 1300);

    if(name  !== "" && kw !== 0) {
      if(kw >0 && kw <= 50){
        alert ("Xin chào " + name +"\n" + "Tổng số Kw bạn đã sử dụng: " + kw + "\n"+ "Tiền điện của bạn là: " + tienDien1 + " VNĐ");
      }else if(50 < kw && kw <= 101){
        alert ("Xin chào " + name +"\n" + "Tổng số Kw bạn đã sử dụng: " + kw + "\n"+ "Tiền điện của bạn là: " + tienDien2 + " VNĐ");
      }else if(101 < kw && kw <= 201){
        alert ("Xin chào " + name +"\n" + "Tổng số Kw bạn đã sử dụng: " + kw + "\n"+ "Tiền điện của bạn là: " + tienDien3 + " VNĐ");
      }else if(201 < kw && kw <= 351){
        alert ("Xin chào " + name +"\n" + "Tổng số Kw bạn đã sử dụng: " + kw + "\n"+ "Tiền điện của bạn là: " + tienDien4 + " VNĐ");
      }else{
        alert ("Xin chào " + name +"\n" + "Tổng số Kw bạn đã sử dụng: " + kw + "\n"+ "Tiền điện của bạn là: " + tienDien5+ " VNĐ");
      }
      
    }else{
      alert("Nhập thông tin hợp lệ");
    }
  });