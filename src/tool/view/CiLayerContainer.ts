class CiLayerContainer extends CiSprite{
    private topLayersNum:number=0;
    private bottomLayersNum:number=0;
    public constructor(){
        super();
    }
    public AddChild(layer:CiLayer){
        this.addChildAt(layer,this.bottomLayersNum);
        ++this.bottomLayersNum;
    }
    public AddTopChild(layer:CiLayer){
        this.addChild(layer);
        ++this.topLayersNum;
    }
    public RemoveChild(layer:CiLayer){
        if(this.isTopChild(layer)){
            --this.topLayersNum;
        }else{
            --this.bottomLayersNum;
        }
        this.removeChild(layer);
    }

    private isTopChild(layer:CiLayer):boolean{
        var n = this.getChildIndex(layer);
        if(n+1>this.bottomLayersNum){
            return true;
        }
        return false;
    }

}