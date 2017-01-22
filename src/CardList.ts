class CardList {
    private _data: Array<Card> = [];
    public constructor() {

    }
    public SortList() {
        this._data.sort(function (a: Card, b: Card): number {
            var temp = a.GetValue() - b.GetValue();
            if (temp == 0)
                return a.GetColor() - b.GetColor();
        });
    }
    public RandomList() {
        var temp: Array<Card> = [];
        while (this._data.length > 0) {
            var n = CiRandom.Randi(0, temp.length);
            temp.push(this._data[n]);
            this._data.splice(n);
        }
        this._data=temp;
    }
    
}