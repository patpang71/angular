"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
