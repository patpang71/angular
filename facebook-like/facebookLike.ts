export class  FacebookLike {

    private _isSelected = false;
    private _noLike = 0;

    constructor( noLike? : number) {
        this._noLike = noLike;
    }

    get isSelected() {
        return this._isSelected;
    }

    get noOfLike() {
        return this._noLike;
    }

    onClick() {
        if (this._isSelected==true) {
            this._noLike--;
        }
        else {
            this._noLike++;
        }
        this._isSelected = !this._isSelected;
    }


}