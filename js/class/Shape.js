export class Shape {
    _x
    _y
    _lineWidth

    constructor(x,y,lineWidth) {
        this._x = x;
        this._y = y;
        this._lineWidth = lineWidth;
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth;
    }
}