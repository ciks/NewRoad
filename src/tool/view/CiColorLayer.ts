class CiColorLayer extends CiLayer{
    private  _shape:egret.Shape;
    public constructor(colorValue:number,alpha:number=1){
        super();
        this._shape.graphics.beginFill(colorValue,alpha);
        this._shape.graphics.drawRect(0,0,this.width,this.height);
        this._shape.graphics.endFill();
        this.addChild(this._shape);
    }
    public ClearColor(){
        this._shape.graphics.clear();
    }
    public Resize(w:number,h:number){
        this.width=w;
        this.height=h;
    }
    public static CreateBlackBG(alpha:number=0.5):CiColorLayer{
        return new CiColorLayer(CiColor.Black,alpha);
    } 
}