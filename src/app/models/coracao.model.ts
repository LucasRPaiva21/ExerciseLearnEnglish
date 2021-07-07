export class Coracao {
    public cheio: boolean = true;

    constructor(cheio: boolean, public urlCoracaoCheio: string = '/assets/coracao_cheio.png', public urlCoracaoVazio: string = '/assets/coracao_vazio.png') {
        this.cheio = cheio
    }

    public exibeCoracao(){
        if(this.cheio){
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}