class CiSingleton<type>{
    private static _instatce=new CiSingleton();
    public GetInstance():CiSingleton<type>{
        return CiSingleton._instatce;
    }
}