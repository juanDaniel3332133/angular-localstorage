import { Icontact } from '../interfaces/icontact';
import { now } from '../shared/helpers';

export class Contact implements Icontact
{
    constructor(
        public id,
        public identification,
        public first_name,
        public last_name,
        public address,
        public phone,
        public birth_date
    )
    {}

    public static createInstance(data:any):Contact
    {
        const {
            id,
            identification,
            first_name,
            last_name,
            address,
            phone,
            birth_date
        } = data;

        return new Contact(
            id,
            identification,
            first_name,
            last_name,
            address,
            phone,
            birth_date
        );
    }

    /* getters */

    get fullName():string
    {
        return `${this.first_name} ${this.last_name}` 
    }

    get birthDate():Date
    {
        return  new Date(this.birth_date);
    }

    /* methods */
    
    public isOnBirthDay(): boolean
    {
        const _now = now(); 
                
        return this.birthDate.getMonth() === _now.getMonth() && 
                this.birthDate.getDate() === _now.getDate();
    }

}
