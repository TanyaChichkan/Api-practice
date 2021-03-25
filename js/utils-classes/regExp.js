export class RegExpr{
    static checkInputReg(value){
        const reg = /[a-zA-Z]/i;
        return reg.test(value); 
    }
}