var pointsArray = document.getElementsByClassName('point');
var points = [1,2,3,4,5,6,7];

function logger(input) {
    console.log(input);
}

function forEach(points, callback) {
    for (var i = 0; i < points.length; i++) {
        callback(points[i]);
    }
}

forEach(points, logger);