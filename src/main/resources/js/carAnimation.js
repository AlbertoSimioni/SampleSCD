paper.install(window);
console.log("AAAAAAAAAAAAAAAAA")
window.onload = function() {
console.log("BBBBBBBBBBBBBBBB")
 		// Get a reference to the canvas object
 	var canvas = document.getElementById('myCanvas');
 		// Create an empty project and a view for the canvas:
 	paper.setup(canvas);
 	var amount = 2;

        // Create a new path and style it:
        var path = new paper.Path({
            // 80% black:
            strokeColor: [0.8],
            strokeWidth: 30,
            strokeCap: 'square'
        });

 	// Add 5 segment points to the path spread out
    // over the width of the view:
    for (var i = 0; i <= amount; i++) {
        path.add(new Point((i / amount) * view.size.width, view.center.y));
    }
     paper.view.draw();
    var WS = window['MozWebSocket'] ? MozWebSocket : WebSocket
    var mapSocket = new WS("ws"+location.protocol.substring(4)+"//"+window.location.hostname+":6696/ws")
    $(".alert").alert()

    mapSocket.onmessage = function(event) {


            var rasterCar = new paper.Raster('car');

            // Move the raster to the center of the view
            rasterCar.position.x = 0;
            rasterCar.position.y = view.center.y;
           	// Draw the view now:
            paper.view.draw();
            view.onFrame = function(event) {
               // On each frame, rotate the path by 3 degrees:
               rasterCar.position.x += 1;
            }
     }
    	// if errors on websocket
    var onalert = function(event) {
        $(".alert").removeClass("hide")
     }
    mapSocket.onerror = onalert
    mapSocket.onclose = onalert
}





