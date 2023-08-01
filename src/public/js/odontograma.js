    var amarillo = document.getElementById('amarillo');
    amarillo.addEventListener('click', ColorAmarillo );
    var rojo = document.getElementById('rojo');
    rojo.addEventListener('click', ColorRojo );
    var negro = document.getElementById('negro');
    negro.addEventListener('click', ColorNegro );
    var azul = document.getElementById('azul');
    azul.addEventListener('click', ColorAzul );
    var borrar = document.getElementById('borrar');
    borrar.addEventListener('click', BorrarColor );

        
   
    function ColorAmarillo(){
     
     colors = document.getElementById('amarillo').value;
     
    }
    function ColorRojo(){
     
     colors = document.getElementById("rojo").value;
    }
    function ColorNegro(){
     
     colors = document.getElementById("negro").value;
    }
    function ColorAzul(){
     
     colors = document.getElementById("azul").value;
    }
    function BorrarColor(){
     
      colors = document.getElementById("borrar").value;
     }


var width = 58;
var height = 200;

//diente18

var diente18 = new Konva.Stage({
  container: 'diente18',
  width: width,
  height: height
});
var layer18 = new Konva.Layer();

var superior_arriba18 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
  // change color
     superior_arriba18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    }); 

var inferior_arriba18 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
  // change color
     inferior_arriba18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    }); 

var izquierda18 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});

// change color
     izquierda18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    });
var centro18 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});

// change color
     centro18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    }); 
var superior_abajo18 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});

// change color
     superior_abajo18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    }); 
var inferior_abajo18 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});

// change color
     inferior_abajo18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    }); 
var derecha18 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});

// change color
     derecha18.on('click', function () {
      this.fill(colors);
      layer18.draw();
    }); 

// add the shape to the layer
layer18.add(superior_arriba18);
layer18.add(inferior_arriba18);
layer18.add(izquierda18)
layer18.add(derecha18)
layer18.add(centro18);
layer18.add(superior_abajo18);
layer18.add(inferior_abajo18);


// add the layer to the stage
diente18.add(layer18);

//diente17
var diente17 = new Konva.Stage({
  container: 'diente17',
  width: width,
  height: height
});
var layer17 = new Konva.Layer();

var superior_arriba17 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});

// change color
     superior_arriba17.on('click', function () {
      this.fill(colors);
      layer17.draw();
    }); 
var inferior_arriba17 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba17.on('click', function () {
    this.fill(colors);
    layer17.draw();
  }); 
var izquierda17 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda17.on('click', function () {
    this.fill(colors);
    layer17.draw();
  }); 
var centro17 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro17.on('click', function () {
    this.fill(colors);
    layer17.draw();
  }); 
var superior_abajo17 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo17.on('click', function () {
    this.fill(colors);
    layer17.draw();
  }); 
var inferior_abajo17 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo17.on('click', function () {
    this.fill(colors);
    layer17.draw();
  }); 
var derecha17 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha17.on('click', function () {
    this.fill(colors);
    layer17.draw();
  }); 


// add the shape to the layer
layer17.add(superior_arriba17);
layer17.add(inferior_arriba17);
layer17.add(izquierda17)
layer17.add(derecha17)
layer17.add(centro17);
layer17.add(superior_abajo17);
layer17.add(inferior_abajo17);


// add the layer to the stage
diente17.add(layer17);

//diente16
var diente16 = new Konva.Stage({
  container: 'diente16',
  width: width,
  height: height
});
var layer16 = new Konva.Layer();

var superior_arriba16 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 
var inferior_arriba16 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 
var izquierda16 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 
var centro16 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 
var superior_abajo16 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 
var inferior_abajo16 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 
var derecha16 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha16.on('click', function () {
    this.fill(colors);
    layer16.draw();
  }); 


// add the shape to the layer
layer16.add(superior_arriba16);
layer16.add(inferior_arriba16);
layer16.add(izquierda16)
layer16.add(derecha16)
layer16.add(centro16);
layer16.add(superior_abajo16);
layer16.add(inferior_abajo16);


// add the layer to the stage
diente16.add(layer16);

//diente15
var diente15 = new Konva.Stage({
  container: 'diente15',
  width: width,
  height: height
});
var layer15 = new Konva.Layer();

var superior_arriba15 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 
var inferior_arriba15 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 
var izquierda15 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 
var centro15 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 
var superior_abajo15 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 
var inferior_abajo15 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 
var derecha15 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha15.on('click', function () {
    this.fill(colors);
    layer15.draw();
  }); 


// add the shape to the layer
layer15.add(superior_arriba15);
layer15.add(inferior_arriba15);
layer15.add(izquierda15)
layer15.add(derecha15)
layer15.add(centro15);
layer15.add(superior_abajo15);
layer15.add(inferior_abajo15);


// add the layer to the stage
diente15.add(layer15);

//diente14
var diente14 = new Konva.Stage({
  container: 'diente14',
  width: width,
  height: height
});
var layer14 = new Konva.Layer();

var superior_arriba14 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 
var inferior_arriba14 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 
var izquierda14 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 
var centro14 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 
var superior_abajo14 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 
var inferior_abajo14 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 
var derecha14 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha14.on('click', function () {
    this.fill(colors);
    layer14.draw();
  }); 


// add the shape to the layer
layer14.add(superior_arriba14);
layer14.add(inferior_arriba14);
layer14.add(izquierda14)
layer14.add(derecha14)
layer14.add(centro14);
layer14.add(superior_abajo14);
layer14.add(inferior_abajo14);


// add the layer to the stage
diente14.add(layer14);

//diente13
var diente13 = new Konva.Stage({
  container: 'diente13',
  width: width,
  height: height
});
var layer13 = new Konva.Layer();

var superior_arriba13 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  }); 
var inferior_arriba13 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  });
var izquierda13 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  }); 

var centro13 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  }); 
var superior_abajo13 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  }); 
var inferior_abajo13 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  }); 
var derecha13 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha13.on('click', function () {
    this.fill(colors);
    layer13.draw();
  }); 

// add the shape to the layer
layer13.add(superior_arriba13);
layer13.add(inferior_arriba13);
layer13.add(izquierda13)
layer13.add(derecha13)
layer13.add(centro13);
layer13.add(superior_abajo13);
layer13.add(inferior_abajo13);


// add the layer to the stage
diente13.add(layer13);

//diente12
var diente12 = new Konva.Stage({
  container: 'diente12',
  width: width,
  height: height
});
var layer12 = new Konva.Layer();

var superior_arriba12 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 
var inferior_arriba12 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 
var izquierda12 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 
var centro12 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 
var superior_abajo12 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 
var inferior_abajo12 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 
var derecha12 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha12.on('click', function () {
    this.fill(colors);
    layer12.draw();
  }); 

// add the shape to the layer
layer12.add(superior_arriba12);
layer12.add(inferior_arriba12);
layer12.add(izquierda12)
layer12.add(derecha12)
layer12.add(centro12);
layer12.add(superior_abajo12);
layer12.add(inferior_abajo12);


// add the layer to the stage
diente12.add(layer12);

//diente13
var diente11 = new Konva.Stage({
  container: 'diente11',
  width: width,
  height: height
});
var layer11 = new Konva.Layer();

var superior_arriba11 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 
var inferior_arriba11 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 
var izquierda11 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 
var centro11 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 
var superior_abajo11 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 
var inferior_abajo11 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 
var derecha11 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha11.on('click', function () {
    this.fill(colors);
    layer11.draw();
  }); 


// add the shape to the layer
layer11.add(superior_arriba11);
layer11.add(inferior_arriba11);
layer11.add(izquierda11)
layer11.add(derecha11)
layer11.add(centro11);
layer11.add(superior_abajo11);
layer11.add(inferior_abajo11);


// add the layer to the stage
diente11.add(layer11);


 //diente 21
var diente21 = new Konva.Stage({
  container: 'diente21',
  width: width,
  height: height
});
var layer21 = new Konva.Layer();

var superior_arriba21 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 
var inferior_arriba21 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 
var izquierda21 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 
var centro21 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 
var superior_abajo21 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 
var inferior_abajo21 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 
var derecha21 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha21.on('click', function () {
    this.fill(colors);
    layer21.draw();
  }); 


// add the shape to the layer
layer21.add(superior_arriba21);
layer21.add(inferior_arriba21);
layer21.add(izquierda21)
layer21.add(derecha21)
layer21.add(centro21);
layer21.add(superior_abajo21);
layer21.add(inferior_abajo21);


// add the layer to the stage
diente21.add(layer21);

 //diente 22
var diente22 = new Konva.Stage({
  container: 'diente22',
  width: width,
  height: height
});
var layer22 = new Konva.Layer();

var superior_arriba22 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba22.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 
var inferior_arriba22 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba21.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 
var izquierda22 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda22.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 
var centro22 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro22.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 
var superior_abajo22 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo22.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 
var inferior_abajo22 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo22.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 
var derecha22 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha22.on('click', function () {
    this.fill(colors);
    layer22.draw();
  }); 


// add the shape to the layer
layer22.add(superior_arriba22);
layer22.add(inferior_arriba22);
layer22.add(izquierda22)
layer22.add(derecha22)
layer22.add(centro22);
layer22.add(superior_abajo22);
layer22.add(inferior_abajo22);


// add the layer to the stage
diente22.add(layer22);

 //diente23
var diente23 = new Konva.Stage({
  container: 'diente23',
  width: width,
  height: height
});
var layer23 = new Konva.Layer();

var superior_arriba23 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 
var inferior_arriba23 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 
var izquierda23 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 
var centro23 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 
var superior_abajo23 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 
var inferior_abajo23 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 
var derecha23 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha23.on('click', function () {
    this.fill(colors);
    layer23.draw();
  }); 

// add the shape to the layer
layer23.add(superior_arriba23);
layer23.add(inferior_arriba23);
layer23.add(izquierda23)
layer23.add(derecha23)
layer23.add(centro23);
layer23.add(superior_abajo23);
layer23.add(inferior_abajo23);


// add the layer to the stage
diente23.add(layer23);


 //diente24
var diente24 = new Konva.Stage({
  container: 'diente24',
  width: width,
  height: height
});
var layer24 = new Konva.Layer();

var superior_arriba24 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 
var inferior_arriba24 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 
var izquierda24 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 
var centro24 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 
var superior_abajo24 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 
var inferior_abajo24 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 
var derecha24 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha24.on('click', function () {
    this.fill(colors);
    layer24.draw();
  }); 


// add the shape to the layer
layer24.add(superior_arriba24);
layer24.add(inferior_arriba24);
layer24.add(izquierda24)
layer24.add(derecha24)
layer24.add(centro24);
layer24.add(superior_abajo24);
layer24.add(inferior_abajo24);


// add the layer to the stage
diente24.add(layer24);

 //diente25
var diente25 = new Konva.Stage({
  container: 'diente25',
  width: width,
  height: height
});
var layer25 = new Konva.Layer();

var superior_arriba25 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 
var inferior_arriba25 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 
var izquierda25 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 
var centro25 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 
var superior_abajo25 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 
var inferior_abajo25 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 
var derecha25 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha25.on('click', function () {
    this.fill(colors);
    layer25.draw();
  }); 

// add the shape to the layer
layer25.add(superior_arriba25);
layer25.add(inferior_arriba25);
layer25.add(izquierda25)
layer25.add(derecha25)
layer25.add(centro25);
layer25.add(superior_abajo25);
layer25.add(inferior_abajo25);


// add the layer to the stage
diente25.add(layer25);

 //diente26
var diente26 = new Konva.Stage({
  container: 'diente26',
  width: width,
  height: height
});
var layer26 = new Konva.Layer();

var superior_arriba26 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 
var inferior_arriba26 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 
var izquierda26 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 
var centro26 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 
var superior_abajo26 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 
var inferior_abajo26 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 
var derecha26 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha26.on('click', function () {
    this.fill(colors);
    layer26.draw();
  }); 


// add the shape to the layer
layer26.add(superior_arriba26);
layer26.add(inferior_arriba26);
layer26.add(izquierda26)
layer26.add(derecha26)
layer26.add(centro26);
layer26.add(superior_abajo26);
layer26.add(inferior_abajo26);


// add the layer to the stage
diente26.add(layer26);

 //diente27
var diente27 = new Konva.Stage({
  container: 'diente27',
  width: width,
  height: height
});
var layer27 = new Konva.Layer();

var superior_arriba27 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba27.on('click', function () {
  this.fill(colors);
  layer27.draw();
}); 

var inferior_arriba27 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba27.on('click', function () {
  this.fill(colors);
  layer27.draw();
});
var izquierda27 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda27.on('click', function () {
  this.fill(colors);
  layer27.draw();
});
var centro27 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro27.on('click', function () {
  this.fill(colors);
  layer27.draw();
});
var superior_abajo27 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo27.on('click', function () {
  this.fill(colors);
  layer27.draw();
});
var inferior_abajo27 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo27.on('click', function () {
  this.fill(colors);
  layer27.draw();
});
var derecha27 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha27.on('click', function () {
  this.fill(colors);
  layer27.draw();
});


// add the shape to the layer
layer27.add(superior_arriba27);
layer27.add(inferior_arriba27);
layer27.add(izquierda27)
layer27.add(derecha27)
layer27.add(centro27);
layer27.add(superior_abajo27);
layer27.add(inferior_abajo27);


// add the layer to the stage
diente27.add(layer27);

 //diente 28
var diente28 = new Konva.Stage({
  container: 'diente28',
  width: width,
  height: height
});
var layer28 = new Konva.Layer();

var superior_arriba28 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});
var inferior_arriba28 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});
var izquierda28 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});
var centro28 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});
var superior_abajo28 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});
var inferior_abajo28 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});
var derecha28 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha28.on('click', function () {
  this.fill(colors);
  layer28.draw();
});


// add the shape to the layer
layer28.add(superior_arriba28);
layer28.add(inferior_arriba28);
layer28.add(izquierda28)
layer28.add(derecha28)
layer28.add(centro28);
layer28.add(superior_abajo28);
layer28.add(inferior_abajo28);


// add the layer to the stage
diente28.add(layer28);

 //diente 48
var diente48 = new Konva.Stage({
  container: 'diente48',
  width: width,
  height: height
});
var layer48 = new Konva.Layer();

var superior_arriba48 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});
var inferior_arriba48 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});
var izquierda48 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});
var centro48 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});
var superior_abajo48 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});
var inferior_abajo48 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});
var derecha48 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha48.on('click', function () {
  this.fill(colors);
  layer48.draw();
});


// add the shape to the layer
layer48.add(superior_arriba48);
layer48.add(inferior_arriba48);
layer48.add(izquierda48)
layer48.add(derecha48)
layer48.add(centro48);
layer48.add(superior_abajo48);
layer48.add(inferior_abajo48);


// add the layer to the stage
diente48.add(layer48);

 //diente 47
var diente47 = new Konva.Stage({
  container: 'diente47',
  width: width,
  height: height
});
var layer47 = new Konva.Layer();

var superior_arriba47 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});

// change color
superior_arriba47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});
var inferior_arriba47 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});
var izquierda47 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});
var centro47 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});
var superior_abajo47 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});
var inferior_abajo47 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});
var derecha47 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha47.on('click', function () {
  this.fill(colors);
  layer47.draw();
});


// add the shape to the layer
layer47.add(superior_arriba47);
layer47.add(inferior_arriba47);
layer47.add(izquierda47)
layer47.add(derecha47)
layer47.add(centro47);
layer47.add(superior_abajo47);
layer47.add(inferior_abajo47);


// add the layer to the stage
diente47.add(layer47);

 //diente 46
var diente46 = new Konva.Stage({
  container: 'diente46',
  width: width,
  height: height
});
var layer46 = new Konva.Layer();

var superior_arriba46 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});
var inferior_arriba46 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});
var izquierda46 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});
var centro46 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});
var superior_abajo46 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});
var inferior_abajo46 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});
var derecha46 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});

// change color
derecha46.on('click', function () {
  this.fill(colors);
  layer46.draw();
});

// add the shape to the layer
layer46.add(superior_arriba46);
layer46.add(inferior_arriba46);
layer46.add(izquierda46)
layer46.add(derecha46)
layer46.add(centro46);
layer46.add(superior_abajo46);
layer46.add(inferior_abajo46);


// add the layer to the stage
diente46.add(layer46);

 //diente 45
var diente45 = new Konva.Stage({
  container: 'diente45',
  width: width,
  height: height
});
var layer45 = new Konva.Layer();

var superior_arriba45 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});
var inferior_arriba45 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});
var izquierda45 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});
var centro45 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});
var superior_abajo45 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});
var inferior_abajo45 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});
var derecha45 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});// change color
derecha45.on('click', function () {
  this.fill(colors);
  layer45.draw();
});


// add the shape to the layer
layer45.add(superior_arriba45);
layer45.add(inferior_arriba45);
layer45.add(izquierda45)
layer45.add(derecha45)
layer45.add(centro45);
layer45.add(superior_abajo45);
layer45.add(inferior_abajo45);


// add the layer to the stage
diente45.add(layer45);

 //diente 44
var diente44 = new Konva.Stage({
  container: 'diente44',
  width: width,
  height: height
});
var layer44 = new Konva.Layer();

var superior_arriba44 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});
var inferior_arriba44 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});
var izquierda44 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});
var centro44 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});
var superior_abajo44 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});
var inferior_abajo44 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});
var derecha44 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha44.on('click', function () {
  this.fill(colors);
  layer44.draw();
});

// add the shape to the layer
layer44.add(superior_arriba44);
layer44.add(inferior_arriba44);
layer44.add(izquierda44)
layer44.add(derecha44)
layer44.add(centro44);
layer44.add(superior_abajo44);
layer44.add(inferior_abajo44);


// add the layer to the stage
diente44.add(layer44);

 //diente 43
var diente43 = new Konva.Stage({
  container: 'diente43',
  width: width,
  height: height
});
var layer43 = new Konva.Layer();

var superior_arriba43 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});
var inferior_arriba43 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});
var izquierda43 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});
var centro43 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});
var superior_abajo43 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});
var inferior_abajo43 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});
var derecha43 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha43.on('click', function () {
  this.fill(colors);
  layer43.draw();
});


// add the shape to the layer
layer43.add(superior_arriba43);
layer43.add(inferior_arriba43);
layer43.add(izquierda43)
layer43.add(derecha43)
layer43.add(centro43);
layer43.add(superior_abajo43);
layer43.add(inferior_abajo43);


// add the layer to the stage
diente43.add(layer43);

 //diente 42
var diente42 = new Konva.Stage({
  container: 'diente42',
  width: width,
  height: height
});
var layer42 = new Konva.Layer();

var superior_arriba42 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});
var inferior_arriba42 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});
var izquierda42 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});
var centro42 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});
var superior_abajo42 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});
var inferior_abajo42 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});
var derecha42 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha42.on('click', function () {
  this.fill(colors);
  layer42.draw();
});


// add the shape to the layer
layer42.add(superior_arriba42);
layer42.add(inferior_arriba42);
layer42.add(izquierda42)
layer42.add(derecha42)
layer42.add(centro42);
layer42.add(superior_abajo42);
layer42.add(inferior_abajo42);


// add the layer to the stage
diente42.add(layer42);

 //diente 41
var diente41 = new Konva.Stage({
  container: 'diente41',
  width: width,
  height: height
});
var layer41 = new Konva.Layer();

var superior_arriba41 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});
var inferior_arriba41 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});
var izquierda41 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});
var centro41 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});
var superior_abajo41 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});
var inferior_abajo41 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});
var derecha41 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha41.on('click', function () {
  this.fill(colors);
  layer41.draw();
});

// add the shape to the layer
layer41.add(superior_arriba41);
layer41.add(inferior_arriba41);
layer41.add(izquierda41)
layer41.add(derecha41)
layer41.add(centro41);
layer41.add(superior_abajo41);
layer41.add(inferior_abajo41);


// add the layer to the stage
diente41.add(layer41);

 //diente 31
var diente31 = new Konva.Stage({
  container: 'diente31',
  width: width,
  height: height
});
var layer31 = new Konva.Layer();

var superior_arriba31 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});
var inferior_arriba31 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});
var izquierda31 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});
var centro31 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});
var superior_abajo31 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});
var inferior_abajo31 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});
var derecha31 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha31.on('click', function () {
  this.fill(colors);
  layer31.draw();
});


// add the shape to the layer
layer31.add(superior_arriba31);
layer31.add(inferior_arriba31);
layer31.add(izquierda31)
layer31.add(derecha31)
layer31.add(centro31);
layer31.add(superior_abajo31);
layer31.add(inferior_abajo31);


// add the layer to the stage
diente31.add(layer31);

 //diente 32
var diente32 = new Konva.Stage({
  container: 'diente32',
  width: width,
  height: height
});
var layer32 = new Konva.Layer();

var superior_arriba32 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});
var inferior_arriba32 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});
var izquierda32 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});
var centro32 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});
var superior_abajo32 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});
var inferior_abajo32 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});
var derecha32 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha32.on('click', function () {
  this.fill(colors);
  layer32.draw();
});


// add the shape to the layer
layer32.add(superior_arriba32);
layer32.add(inferior_arriba32);
layer32.add(izquierda32)
layer32.add(derecha32)
layer32.add(centro32);
layer32.add(superior_abajo32);
layer32.add(inferior_abajo32);


// add the layer to the stage
diente32.add(layer32);

 //diente 33
var diente33 = new Konva.Stage({
  container: 'diente33',
  width: width,
  height: height
});
var layer33 = new Konva.Layer();

var superior_arriba33 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});
var inferior_arriba33 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});
var izquierda33 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});
var centro33 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});
var superior_abajo33 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});
var inferior_abajo33 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});
var derecha33 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha33.on('click', function () {
  this.fill(colors);
  layer33.draw();
});


// add the shape to the layer
layer33.add(superior_arriba33);
layer33.add(inferior_arriba33);
layer33.add(izquierda33)
layer33.add(derecha33)
layer33.add(centro33);
layer33.add(superior_abajo33);
layer33.add(inferior_abajo33);


// add the layer to the stage
diente33.add(layer33);

 //diente13
var diente34 = new Konva.Stage({
  container: 'diente34',
  width: width,
  height: height
});
var layer34 = new Konva.Layer();

var superior_arriba34 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});
var inferior_arriba34 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});
var izquierda34 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});
var centro34 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});
var superior_abajo34 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});
var inferior_abajo34 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});
var derecha34 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha34.on('click', function () {
  this.fill(colors);
  layer34.draw();
});


// add the shape to the layer
layer34.add(superior_arriba34);
layer34.add(inferior_arriba34);
layer34.add(izquierda34)
layer34.add(derecha34)
layer34.add(centro34);
layer34.add(superior_abajo34);
layer34.add(inferior_abajo34);


// add the layer to the stage
diente34.add(layer34);

 //diente 35
var diente35 = new Konva.Stage({
  container: 'diente35',
  width: width,
  height: height
});
var layer35 = new Konva.Layer();

var superior_arriba35 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});
var inferior_arriba35 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});
var izquierda35 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});
var centro35 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});
var superior_abajo35 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});
var inferior_abajo35 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});
var derecha35 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha35.on('click', function () {
  this.fill(colors);
  layer35.draw();
});

// add the shape to the layer
layer35.add(superior_arriba35);
layer35.add(inferior_arriba35);
layer35.add(izquierda35)
layer35.add(derecha35)
layer35.add(centro35);
layer35.add(superior_abajo35);
layer35.add(inferior_abajo35);


// add the layer to the stage
diente35.add(layer35);

 //diente 36
var diente36 = new Konva.Stage({
  container: 'diente36',
  width: width,
  height: height
});
var layer36 = new Konva.Layer();

var superior_arriba36 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});
var inferior_arriba36 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});
var izquierda36 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});
var centro36 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});
var superior_abajo36 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});
var inferior_abajo36 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});
var derecha36 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha36.on('click', function () {
  this.fill(colors);
  layer36.draw();
});

// add the shape to the layer
layer36.add(superior_arriba36);
layer36.add(inferior_arriba36);
layer36.add(izquierda36)
layer36.add(derecha36)
layer36.add(centro36);
layer36.add(superior_abajo36);
layer36.add(inferior_abajo36);


// add the layer to the stage
diente36.add(layer36);

 //diente 37
var diente37 = new Konva.Stage({
  container: 'diente37',
  width: width,
  height: height
});
var layer37 = new Konva.Layer();

var superior_arriba37 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba37.on('click', function () {
  this.fill(colors);
  layer37.draw();
});
var inferior_arriba37 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba37.on('click', function () {
  this.fill(colors);
  layer37.draw();
});
var izquierda37 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda37.on('click', function () {
  this.fill(colors);
  layer37.draw();
});
var centro37 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro37.on('click', function () {
  this.fill(colors);
  layer37.draw();
});
var superior_abajo37 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo37.on('click', function () {
  this.fill(colors);
  layer37.draw();
});
var inferior_abajo37 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
var derecha37 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha37.on('click', function () {
  this.fill(colors);
  layer37.draw();
});


// add the shape to the layer
layer37.add(superior_arriba37);
layer37.add(inferior_arriba37);
layer37.add(izquierda37)
layer37.add(derecha37)
layer37.add(centro37);
layer37.add(superior_abajo37);
layer37.add(inferior_abajo37);


// add the layer to the stage
diente37.add(layer37);

 //diente 38
var diente38 = new Konva.Stage({
  container: 'diente38',
  width: width,
  height: height
});
var layer38 = new Konva.Layer();

var superior_arriba38 = new Konva.Line({
  points: [ 23, 2,30,13, 50, 13, 58, 2],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_arriba38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});
var inferior_arriba38 = new Konva.Line({
  points: [ 30,13,35, 22,45,22, 50, 13],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_arriba38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});
var izquierda38 = new Konva.Line({
  points: [ 30,13,23,13,23,41,29,41,35,32,35,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
izquierda38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});
var centro38 = new Konva.Line({
  points: [ 35,22,35, 32,45,32, 45, 22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
centro38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});
var superior_abajo38 = new Konva.Line({
  points: [35,32,29,41,50,41,45,32],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});
// change color
superior_abajo38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});
var inferior_abajo38 = new Konva.Line({
  points: [ 29,41,22,52,56,52,50,41],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
inferior_abajo38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});
var derecha38 = new Konva.Line({
  points: [ 50, 13,57,13,57,41,50,41,45,32,45,22],
  fill: '#FFFAFA',
  stroke: 'black',
  strokeWidth: 0.8,
  closed: true
});
// change color
derecha38.on('click', function () {
  this.fill(colors);
  layer38.draw();
});


// add the shape to the layer
layer38.add(superior_arriba38);
layer38.add(inferior_arriba38);
layer38.add(izquierda38)
layer38.add(derecha38)
layer38.add(centro38);
layer38.add(superior_abajo38);
layer38.add(inferior_abajo38);


// add the layer to the stage
diente38.add(layer38);


// //valores into array




   function odontograma(){
  document.getElementById('superior_arriba18').value = superior_arriba18.fill()
  document.getElementById('superior_arriba17').value = superior_arriba17.fill()
  document.getElementById('superior_arriba16').value = superior_arriba16.fill()
  document.getElementById('superior_arriba15').value = superior_arriba15.fill()
  document.getElementById('superior_arriba14').value = superior_arriba14.fill()
  document.getElementById('superior_arriba13').value = superior_arriba13.fill()
  document.getElementById('superior_arriba12').value = superior_arriba12.fill()
  document.getElementById('superior_arriba11').value = superior_arriba11.fill()

  document.getElementById('superior_arriba21').value = superior_arriba21.fill()
  document.getElementById('superior_arriba22').value = superior_arriba22.fill()
  document.getElementById('superior_arriba23').value = superior_arriba23.fill()
  document.getElementById('superior_arriba24').value = superior_arriba24.fill()
  document.getElementById('superior_arriba25').value = superior_arriba25.fill()
  document.getElementById('superior_arriba26').value = superior_arriba26.fill()
  document.getElementById('superior_arriba27').value = superior_arriba27.fill()
  document.getElementById('superior_arriba28').value = superior_arriba28.fill()

  document.getElementById('superior_arriba48').value = superior_arriba48.fill()
  document.getElementById('superior_arriba47').value = superior_arriba47.fill()
  document.getElementById('superior_arriba46').value = superior_arriba46.fill()
  document.getElementById('superior_arriba45').value = superior_arriba45.fill()
  document.getElementById('superior_arriba44').value = superior_arriba44.fill()
  document.getElementById('superior_arriba43').value = superior_arriba43.fill()
  document.getElementById('superior_arriba42').value = superior_arriba42.fill()
  document.getElementById('superior_arriba41').value = superior_arriba41.fill()

  document.getElementById('superior_arriba31').value = superior_arriba31.fill()
  document.getElementById('superior_arriba32').value = superior_arriba32.fill()
  document.getElementById('superior_arriba33').value = superior_arriba33.fill()
  document.getElementById('superior_arriba34').value = superior_arriba34.fill()
  document.getElementById('superior_arriba35').value = superior_arriba35.fill()
  document.getElementById('superior_arriba36').value = superior_arriba36.fill()
  document.getElementById('superior_arriba37').value = superior_arriba37.fill()
  document.getElementById('superior_arriba38').value = superior_arriba38.fill()
  
  document.getElementById('inferior_arriba18').value = inferior_arriba18.fill()
  document.getElementById('inferior_arriba17').value = inferior_arriba17.fill()
  document.getElementById('inferior_arriba16').value = inferior_arriba16.fill()
  document.getElementById('inferior_arriba15').value = inferior_arriba15.fill()
  document.getElementById('inferior_arriba14').value = inferior_arriba14.fill()
  document.getElementById('inferior_arriba13').value = inferior_arriba13.fill()
  document.getElementById('inferior_arriba12').value = inferior_arriba12.fill()
  document.getElementById('inferior_arriba11').value = inferior_arriba11.fill()
  
  document.getElementById('inferior_arriba21').value = inferior_arriba21.fill()
  document.getElementById('inferior_arriba22').value = inferior_arriba22.fill()
  document.getElementById('inferior_arriba23').value = inferior_arriba23.fill()
  document.getElementById('inferior_arriba24').value = inferior_arriba24.fill()
  document.getElementById('inferior_arriba25').value = inferior_arriba25.fill()
  document.getElementById('inferior_arriba26').value = inferior_arriba26.fill()
  document.getElementById('inferior_arriba27').value = inferior_arriba27.fill()
  document.getElementById('inferior_arriba28').value = inferior_arriba28.fill()

  document.getElementById('inferior_arriba48').value = inferior_arriba48.fill()
  document.getElementById('inferior_arriba47').value = inferior_arriba47.fill()
  document.getElementById('inferior_arriba46').value = inferior_arriba46.fill()
  document.getElementById('inferior_arriba45').value = inferior_arriba45.fill()
  document.getElementById('inferior_arriba44').value = inferior_arriba44.fill()
  document.getElementById('inferior_arriba43').value = inferior_arriba43.fill()
  document.getElementById('inferior_arriba42').value = inferior_arriba42.fill()
  document.getElementById('inferior_arriba41').value = inferior_arriba41.fill()

  document.getElementById('inferior_arriba31').value = inferior_arriba31.fill()
  document.getElementById('inferior_arriba32').value = inferior_arriba32.fill()
  document.getElementById('inferior_arriba33').value = inferior_arriba33.fill()
  document.getElementById('inferior_arriba34').value = inferior_arriba34.fill()
  document.getElementById('inferior_arriba35').value = inferior_arriba35.fill()
  document.getElementById('inferior_arriba36').value = inferior_arriba36.fill()
  document.getElementById('inferior_arriba37').value = inferior_arriba37.fill()
  document.getElementById('inferior_arriba38').value = inferior_arriba38.fill()

  document.getElementById('izquierda18').value = izquierda18.fill()
  document.getElementById('izquierda17').value = izquierda17.fill()
  document.getElementById('izquierda16').value = izquierda16.fill()
  document.getElementById('izquierda15').value = izquierda15.fill()
  document.getElementById('izquierda14').value = izquierda14.fill()
  document.getElementById('izquierda13').value = izquierda13.fill()
  document.getElementById('izquierda12').value = izquierda12.fill()
  document.getElementById('izquierda11').value = izquierda11.fill()

  document.getElementById('izquierda21').value = izquierda21.fill()
  document.getElementById('izquierda22').value = izquierda22.fill()
  document.getElementById('izquierda23').value = izquierda23.fill()
  document.getElementById('izquierda24').value = izquierda24.fill()
  document.getElementById('izquierda25').value = izquierda25.fill()
  document.getElementById('izquierda26').value = izquierda26.fill()
  document.getElementById('izquierda27').value = izquierda27.fill()
  document.getElementById('izquierda28').value = izquierda28.fill()

  document.getElementById('izquierda48').value = izquierda48.fill()
  document.getElementById('izquierda47').value = izquierda47.fill()
  document.getElementById('izquierda46').value = izquierda46.fill()
  document.getElementById('izquierda45').value = izquierda45.fill()
  document.getElementById('izquierda44').value = izquierda44.fill()
  document.getElementById('izquierda43').value = izquierda43.fill()
  document.getElementById('izquierda42').value = izquierda42.fill()
  document.getElementById('izquierda41').value = izquierda41.fill()

  document.getElementById('izquierda31').value = izquierda31.fill()
  document.getElementById('izquierda32').value = izquierda32.fill()
  document.getElementById('izquierda33').value = izquierda33.fill()
  document.getElementById('izquierda34').value = izquierda34.fill()
  document.getElementById('izquierda35').value = izquierda35.fill()
  document.getElementById('izquierda36').value = izquierda36.fill()
  document.getElementById('izquierda37').value = izquierda37.fill()
  document.getElementById('izquierda38').value = izquierda38.fill()

  document.getElementById('centro18').value = centro18.fill()
  document.getElementById('centro17').value = centro17.fill()
  document.getElementById('centro16').value = centro16.fill()
  document.getElementById('centro15').value = centro15.fill()
  document.getElementById('centro14').value = centro14.fill()
  document.getElementById('centro13').value = centro13.fill()
  document.getElementById('centro12').value = centro12.fill()
  document.getElementById('centro11').value = centro11.fill()

  document.getElementById('centro21').value = centro21.fill()
  document.getElementById('centro22').value = centro22.fill()
  document.getElementById('centro23').value = centro23.fill()
  document.getElementById('centro24').value = centro24.fill()
  document.getElementById('centro25').value = centro25.fill()
  document.getElementById('centro26').value = centro26.fill()
  document.getElementById('centro27').value = centro27.fill()
  document.getElementById('centro28').value = centro28.fill()

  document.getElementById('centro48').value = centro48.fill()
  document.getElementById('centro47').value = centro47.fill()
  document.getElementById('centro46').value = centro46.fill()
  document.getElementById('centro45').value = centro45.fill()
  document.getElementById('centro44').value = centro44.fill()
  document.getElementById('centro43').value = centro43.fill()
  document.getElementById('centro42').value = centro42.fill()
  document.getElementById('centro41').value = centro41.fill()

  document.getElementById('centro31').value = centro31.fill()
  document.getElementById('centro32').value = centro32.fill()
  document.getElementById('centro33').value = centro33.fill()
  document.getElementById('centro34').value = centro34.fill()
  document.getElementById('centro35').value = centro35.fill()
  document.getElementById('centro36').value = centro36.fill()
  document.getElementById('centro37').value = centro37.fill()
  document.getElementById('centro38').value = centro38.fill() 

  document.getElementById('superior_abajo18').value = superior_abajo18.fill()
  document.getElementById('superior_abajo17').value = superior_abajo17.fill()
  document.getElementById('superior_abajo16').value = superior_abajo16.fill()
  document.getElementById('superior_abajo15').value = superior_abajo15.fill()
  document.getElementById('superior_abajo14').value = superior_abajo14.fill()
  document.getElementById('superior_abajo13').value = superior_abajo13.fill()
  document.getElementById('superior_abajo12').value = superior_abajo12.fill()
  document.getElementById('superior_abajo11').value = superior_abajo11.fill()

  document.getElementById('superior_abajo21').value = superior_abajo21.fill()
  document.getElementById('superior_abajo22').value = superior_abajo22.fill()
  document.getElementById('superior_abajo23').value = superior_abajo23.fill()
  document.getElementById('superior_abajo24').value = superior_abajo24.fill()
  document.getElementById('superior_abajo25').value = superior_abajo25.fill()
  document.getElementById('superior_abajo26').value = superior_abajo26.fill()
  document.getElementById('superior_abajo27').value = superior_abajo27.fill()
  document.getElementById('superior_abajo28').value = superior_abajo28.fill()

  document.getElementById('superior_abajo48').value = superior_abajo48.fill()
  document.getElementById('superior_abajo47').value = superior_abajo47.fill()
  document.getElementById('superior_abajo46').value = superior_abajo46.fill()
  document.getElementById('superior_abajo45').value = superior_abajo45.fill()
  document.getElementById('superior_abajo44').value = superior_abajo44.fill()
  document.getElementById('superior_abajo43').value = superior_abajo43.fill()
  document.getElementById('superior_abajo42').value = superior_abajo42.fill()
  document.getElementById('superior_abajo41').value = superior_abajo41.fill()

  document.getElementById('superior_abajo31').value = superior_abajo31.fill()
  document.getElementById('superior_abajo32').value = superior_abajo32.fill()
  document.getElementById('superior_abajo33').value = superior_abajo33.fill()
  document.getElementById('superior_abajo34').value = superior_abajo34.fill()
  document.getElementById('superior_abajo35').value = superior_abajo35.fill()
  document.getElementById('superior_abajo36').value = superior_abajo36.fill()
  document.getElementById('superior_abajo37').value = superior_abajo37.fill()
  document.getElementById('superior_abajo38').value = superior_abajo38.fill()

  document.getElementById('inferior_abajo18').value = inferior_abajo18.fill()
  document.getElementById('inferior_abajo17').value = inferior_abajo17.fill()
  document.getElementById('inferior_abajo16').value = inferior_abajo16.fill()
  document.getElementById('inferior_abajo15').value = inferior_abajo15.fill()
  document.getElementById('inferior_abajo14').value = inferior_abajo14.fill()
  document.getElementById('inferior_abajo13').value = inferior_abajo13.fill()
  document.getElementById('inferior_abajo12').value = inferior_abajo12.fill()
  document.getElementById('inferior_abajo11').value = inferior_abajo11.fill()

  document.getElementById('inferior_abajo21').value = inferior_abajo21.fill()
  document.getElementById('inferior_abajo22').value = inferior_abajo22.fill()
  document.getElementById('inferior_abajo23').value = inferior_abajo23.fill()
  document.getElementById('inferior_abajo24').value = inferior_abajo24.fill()
  document.getElementById('inferior_abajo25').value = inferior_abajo25.fill()
  document.getElementById('inferior_abajo26').value = inferior_abajo26.fill()
  document.getElementById('inferior_abajo27').value = inferior_abajo27.fill()
  document.getElementById('inferior_abajo28').value = inferior_abajo28.fill()

  document.getElementById('inferior_abajo48').value = inferior_abajo48.fill()
  document.getElementById('inferior_abajo47').value = inferior_abajo47.fill()
  document.getElementById('inferior_abajo46').value = inferior_abajo46.fill()
  document.getElementById('inferior_abajo45').value = inferior_abajo45.fill()
  document.getElementById('inferior_abajo44').value = inferior_abajo44.fill()
  document.getElementById('inferior_abajo43').value = inferior_abajo43.fill()
  document.getElementById('inferior_abajo42').value = inferior_abajo42.fill()
  document.getElementById('inferior_abajo41').value = inferior_abajo41.fill()

  document.getElementById('inferior_abajo31').value = inferior_abajo31.fill()
  document.getElementById('inferior_abajo32').value = inferior_abajo32.fill()
  document.getElementById('inferior_abajo33').value = inferior_abajo33.fill()
  document.getElementById('inferior_abajo34').value = inferior_abajo34.fill()
  document.getElementById('inferior_abajo35').value = inferior_abajo35.fill()
  document.getElementById('inferior_abajo36').value = inferior_abajo36.fill()
  document.getElementById('inferior_abajo37').value = inferior_abajo37.fill()
  document.getElementById('inferior_abajo38').value = inferior_abajo38.fill()

  document.getElementById('derecha18').value = derecha18.fill()
  document.getElementById('derecha17').value = derecha17.fill()
  document.getElementById('derecha16').value = derecha16.fill()
  document.getElementById('derecha15').value = derecha15.fill()
  document.getElementById('derecha14').value = derecha14.fill()
  document.getElementById('derecha13').value = derecha13.fill()
  document.getElementById('derecha12').value = derecha12.fill()
  document.getElementById('derecha11').value = derecha11.fill()

  document.getElementById('derecha21').value = derecha21.fill()
  document.getElementById('derecha22').value = derecha22.fill()
  document.getElementById('derecha23').value = derecha23.fill()
  document.getElementById('derecha24').value = derecha24.fill()
  document.getElementById('derecha25').value = derecha25.fill()
  document.getElementById('derecha26').value = derecha26.fill()
  document.getElementById('derecha27').value = derecha27.fill()
  document.getElementById('derecha28').value = derecha28.fill()

  document.getElementById('derecha48').value = derecha48.fill()
  document.getElementById('derecha47').value = derecha47.fill()
  document.getElementById('derecha46').value = derecha46.fill()
  document.getElementById('derecha45').value = derecha45.fill()
  document.getElementById('derecha44').value = derecha44.fill()
  document.getElementById('derecha43').value = derecha43.fill()
  document.getElementById('derecha42').value = derecha42.fill()
  document.getElementById('derecha41').value = derecha41.fill()

  document.getElementById('derecha31').value = derecha31.fill()
  document.getElementById('derecha32').value = derecha32.fill()
  document.getElementById('derecha33').value = derecha33.fill()
  document.getElementById('derecha34').value = derecha34.fill()
  document.getElementById('derecha35').value = derecha35.fill()
  document.getElementById('derecha36').value = derecha36.fill()
  document.getElementById('derecha37').value = derecha37.fill()
  document.getElementById('derecha38').value = derecha38.fill()
  
   }
