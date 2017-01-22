class CiRandom{
    public static Randf(min:number,max:number):number{
        return Math.random()*(max-min)+min;
    }
    public static Randi(min:number,max:number){
        return Math.ceil(CiRandom.Randf(min,max));
    }
}