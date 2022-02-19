function rainApp() {
    var image = document.getElementById('background');
    image.onload = function () {
        var engine = new RainyDay({
            image: this,
            blur: 10,
            opacity: 1,
            gravityAngle: Math.PI / 2,
            gravityAngleVariance: 0
        });

        engine.gravity = engine.GRAVITY_NON_LINEAR;
        engine.trail = engine.TRAIL_SMUDGE; 

        engine.rain([
                           [0, 3, 8],
                           [3, 8, 1]
                       ], 50);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'https://images.unsplash.com/photo-1645157539939-f49ea489913c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

}