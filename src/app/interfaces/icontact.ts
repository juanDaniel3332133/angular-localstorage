export interface Icontact
{
    readonly id:number;
    readonly identification:number;
    readonly first_name:string;
    readonly last_name:string;
    readonly address:string;
    readonly phone:number;
    readonly birth_date:Date;
    isOnBirthDay: () => boolean
}
