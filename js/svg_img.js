var draw = SVG('drawing').size(3000, 1300);

var svg_points_orig = new SVG.PointArray([
	[0,0],
  [0,40],
  [30,20]
]);

var colors = ["#FE938C","#E6B89C","#EAD2AC","#9CAFB7","#4281A4"];
//'#E0FBFC','#C2DFE3','#9DB4C0','#5C6B73','#253237'
//"#EAFDF8","#E5E9EC","#DDCAD9","#D1B1CB","#7C616C"
//"FE938C","E6B89C","EAD2AC","9CAFB7","4281A4"
//var polygon = draw.polygon(svg_points_orig);
//polygon.fill('#f06').stroke({width: 1, color: '#fff'});

for(var j = 0; j < 40; j++){
	var svg_points = svg_points_orig.clone();
	var x_offset = j * 30;
  var x_off_arr = [x_offset, 0];
  var e = 0;
  svg_points.value.forEach(function(el){
  	el = el.map(function(num, idx){
    	return num + x_off_arr[idx];
    });
    svg_points.value[e] = el;
    e++;
  });
  if(j % 2 == 1) {
  	var y_off_arr = [0,-20];
  	var t = 0;
  	svg_points.value.forEach(function(el){
  		el = el.map(function(num, idx){
    		return num + y_off_arr[idx];
    	});
    	svg_points.value[t] = el;
   	 	t++;
  	});
  }

	for(var i = 0; i < 20; i++) {
		svg_points.value[0] = svg_points.value[1];
		var array2 = [0,40];
		svg_points.value[1] = svg_points.value[2].map(function(num, 	idx){
			return num + array2[idx];
		});
	svg_points.value[2] = svg_points.value[2];

	polygon = draw.polygon(svg_points);
  var randColor = colors[getRandomInt(5)];
	polygon.fill('' + randColor).stroke({width: 1, color: randColor});

	svg_points.value[2] = svg_points.value[1];
	svg_points.value[1] = svg_points.value[0].map(function(num, idx){
		return num + array2[idx];
	});
	svg_points.value[0] = svg_points.value[0];

	polygon = draw.polygon(svg_points);
  randColor = colors[getRandomInt(5)];
	polygon.fill('' + randColor).stroke({width: 0, color: randColor});
}

}

var svg_export = document.getElementById("drawing").children[0];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function svgDataURL() {
   var svgAsXML = (new XMLSerializer).serializeToString(svg_export);
   return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
}
function download(){
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", svgDataURL());
        dl.setAttribute("download", "test.svg");
        dl.click();
}
