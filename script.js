var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
dinosaur.toUpperCase();

var text = text.replace('Velociraptor', dinosaur);

console.log(text.substr(0, text.length/2));
