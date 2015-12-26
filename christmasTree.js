var tree = document.getElementById('tree');
var branches = '0';

function formBranches() {
  for ( var i = 0; i < 10; i++ ) {
    branches += '00';
    tree.innerHTML +='<br/>' + branches;
  }
}
formBranches();
