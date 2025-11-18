class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const kunal = new User("k@kunal.com", "abc")
console.log(kunal.password);