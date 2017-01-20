class CiSprite extends egret.Sprite{
    public constructor(){
        super();
        this.addEventListener( egret.Event.ADDED_TO_STAGE,this.OnActive,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.OnDeactive,this);
    }
    public OnActive(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.OnActive,this);
    }
    public OnDeactive(){
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.OnDeactive,this);
    }
    public DataSource(data:any){
    }
    public RemoveFromParent(){
        this.parent.removeChild(this);
    }
    public SetPositon(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    public SetSize(w:number,h:number){
        this.width=w;
        this.height=h;
    }
    

}