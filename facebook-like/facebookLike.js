"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FacebookLike = /** @class */ (function () {
    function FacebookLike(noLike) {
        this._isSelected = false;
        this._noLike = 0;
        this._noLike = noLike;
    }
    Object.defineProperty(FacebookLike.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookLike.prototype, "noOfLike", {
        get: function () {
            return this._noLike;
        },
        enumerable: true,
        configurable: true
    });
    FacebookLike.prototype.onClick = function () {
        if (this._isSelected == true) {
            this._noLike--;
        }
        else {
            this._noLike++;
        }
        this._isSelected = !this._isSelected;
    };
    return FacebookLike;
}());
exports.FacebookLike = FacebookLike;
