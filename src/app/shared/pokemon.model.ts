export interface Pokemon {
  id: string;
  nome: string;
  ordem: number;
  descricao: string;
  altura: number;
  peso: number;
  especie: string;
  tipos: Array<string>;
}
