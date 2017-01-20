class CiLayer extends CiSprite{

    public constructor(){
        super();
    }
    public OnActive(){
        super.OnActive();
        this.width=this.stage.stageWidth;
        this.height=this.stage.stageHeight;
    }

}