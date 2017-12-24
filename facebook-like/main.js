"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facebookLike_1 = require("./facebookLike");
var page = new facebookLike_1.FacebookLike(5);
page.onClick();
console.log("No of Like: " + page.noOfLike + " isSelected: " + page.isSelected);
