
var trunk = ['||'];

function buildTree(branches) {
  for (var i = 0; i < branches; i++) {
    if ( i < branches ){
      trunk.push("000");
      return;
    }
    if( trunk < branches ) {
      trunk.push(("000")*2);
      return trunk;
    }
  }
buildTree(10);
}
console.log(trunk);