export class Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: number;

    constructor(id: number, nome: string, descricao: string, valor: number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }
}
