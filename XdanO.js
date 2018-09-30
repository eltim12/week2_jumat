function xo(str) {
    var jumlahX = 0;
    var jumlahO = 0;
  
    for(var i = 0; i < str.length; i++) {
      if(str[i] === 'x') {
        jumlahX++;
      } else {
        jumlahO++;
      }
    }
    return jumlahX === jumlahO;
  }
  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo'));
  console.log(xo('oxo')); 
  console.log(xo('xxxooo')); 
  console.log(xo('xoxooxxo'));