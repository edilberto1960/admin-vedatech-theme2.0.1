// el caracter "?" significa que el campo es opcional
export class Usuario {

    constructor(

        public firstName: string,
        public lastName: string,
        public username: string,
        public email: string,
        public password: string,
        public phone?: string,
        public _id?: string,

    ) { }
}
