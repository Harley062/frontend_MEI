import { Endereco } from "./endereco";

export class Cliente {

  codigo!: number;
  nome!: string;
  sexo?: string;
  cpf?: string;
  cnpj?: string;
  telefoneResidencial!: string;
  telefoneComercial!: string;
  telefoneCelular!: string;
  email!: string;
  endereco!: Endereco;
  
}
