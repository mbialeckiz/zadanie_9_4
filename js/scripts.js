function drawTree(poziomy) {
  for(var i=0; i<=poziomy; i++) {

    var star = '';
    for(var j=1; j<=i; j++) {
      star = star + "*";
    }
   console.log(star);  
  }
}

drawTree(5);

