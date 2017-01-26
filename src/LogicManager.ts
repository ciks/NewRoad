class LogicManager extends CiSingleton<LogicManager>{
    protected Init(){
        SingleClient.GetInstance();
        GameClient.GetInstance();
    }
    
}