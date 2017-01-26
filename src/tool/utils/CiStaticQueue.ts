class CiStaticQueue<type>{
    private _data: Array<type>;
    private _begin: number = 0;
    private _end: number = 0;
    private _length: number = 0;
    public constructor(arrLength: number) {
        this._data = new Array(arrLength);
    }
    public Push(data: type):void {
        if(this.isFull())
            console.log("Static Queue is full,the data will be covert!");
        this._data[this._end];
        this._end=this.next(this._end);
        ++this._length;
    }
    public Pop():type {
        if(this.isEmpty()){
            console.log("Static Queue is Empty!");
            return ;
        }
        var temp=this._data[this._begin];
        this._begin=this.next(this._begin);
        --this._length
        return temp;
    }
    public Begin():type{
        return this._data[this._begin];
    }
    public End():type{
        return this._data[this.previous(this._end)];
    }
    public Length():number{
        return this._length;
    }
    public isFull():boolean{
        return this._length==this._data.length;
    }
    public isEmpty():boolean{
        return this._length==0;
    }
    private next(n: number) {
        if (n >= this._data.length - 1) {
            return  0;
        }
        return n+1;
    }
    private previous(n: number) {
        if (n <= 0) {
            return this._data.length;
        }
        return n-1;
    }
}