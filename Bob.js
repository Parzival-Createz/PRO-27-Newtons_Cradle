class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 1.255,
            // friction: 0,
            density: 80
        }

        this.body = Bodies.circle(x, y, 26, options);
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(255, 0, 255);
        ellipse(pos.x, pos.y, 26, 26);
        pop();
    }
}