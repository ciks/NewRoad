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
        for(var i:number=0;i<this._data.length;++i){
            if(Card.Compare(this._data[i],temp)){
                this._data.splice(i-1,0,temp);
            }
        }
    }
    public Remove(value:number){
        var temp=new Card(value);
        var n=this._data.indexOf(temp);
        return this._data.splice(n);
    }
    
}