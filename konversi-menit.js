function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    var menit = menit % 60;
  
    if(menit < 10){
      return jam + ' :0' + menit;
    } else {
      return jam + ' :' + menit;
    }
  }
  
  console.log(konversiMenit(63)); 
  console.log(konversiMenit(124));
  console.log(konversiMenit(53)); 
  console.log(konversiMenit(88)); 
  console.log(konversiMenit(120)); 