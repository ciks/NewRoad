class CardList {
    private _data: Array<Card> = [];
    public constructor() {

    }
    public SortList() {
        this._data.sort(Card.Compare);
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
    public Insert(value:number){
        var temp=new Card(value);
        var i:number=0;
        for(var val in this._data){
            if(Card.Compare(new Card(value),val)){

            }
        }
        this._data
    }
    public Remove(){

    }
    
}