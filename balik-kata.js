function balikKata(kalimat) {
    var kataTerbalik = '';
  
    for(var i = kalimat.length - 1; i >= 0; i--) {
      kataTerbalik += kalimat[i];
    }
    return kataTerbalik;
  }
  console.log(balikKata('Hello World and Coders')); 
  console.log(balikKata('John Doe'));
  console.log(balikKata('I am a bookworm')); 
  console.log(balikKata('Coding is my hobby'));
  console.log(balikKata('Super')); 