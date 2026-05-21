class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    getDetails(){
        return `${this.name}-${this.email}`;
    }
}
export default class User extends Person{
    #id;
    constructor(id,name,email,company){
        super(name,email);
        this.#id=id;
        this.company=company;
        this._username=name;
    }
    get id(){
        return this.#id;
    }
    get username(){
        return this._username;
    }
    set username(value){
        this._username=value;
    }
    displayUser(){
        return`
        <h3>${this.name}</h3>
        <p>Email:${this.email}</p>
        <p>company:${this.company}</p>
        `;
    }
}