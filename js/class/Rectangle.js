import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    #width;
    #height;

    constructor(x, y, width, height, lineWidth) {
        super(x, y, lineWidth);
        this.#width = width;
        this.#height = height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this.#width, this.#height);
        ctx.lineWidth = this._lineWidth;
        ctx.stroke();
    }
}