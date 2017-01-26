class CiSingleton<type>{
    private static _instatce=new CiSingleton();
    public static GetInstance(){
        return CiSingleton._instatce;
    }
    constructor(){
        this.Init();
    }
    protected Init(){

    }
}