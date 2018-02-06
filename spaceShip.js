function SpaceShip() {
    this.x1 = 0;
    this.x2 = 0;
    this.x3 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.y3 = 0;
    this.speed = 0;

    this.setSpaceShip = function (ancho, alto) {
        this.x1 = ancho / 2 - 10;
        this.y1 = alto * 0.95;
        this.x2 = ancho / 2;
        this.y2 = alto * 0.95 - 20;
        this.x3 = ancho / 2 + 10;
        this.y3 = alto * 0.95;
    }

    this.update = function () {
        if (((this.x3 + 10) > ancho) && (this.speed === 1)) 
            this.speed = 0;
            if (((this.x1 - 10) < 0) && (this.speed === -1)) 
            this.speed = 0;
            
        if (this.speed === 1) {
            this.x1 += 3;
            this.x2 += 3;
            this.x3 += 3;
        } else if (this.speed === -1) {
            this.x1 -= 3;
            this.x2 -= 3;
            this.x3 -= 3;
        }
    }

    this.moveRight = function (ancho) {
    
            this.speed = 1;
    }

    this.moveLeft = function () {
        this.speed = -1;
    }

    this.stop = function () {
        this.speed = 0;
    }

    this.show = function () {
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }


}

