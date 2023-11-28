export interface Utente{
  nome: string;
  cognome: string;
  password: string;
  uomo: boolean;
  maggiorenne: boolean;
}

export interface Column{
  label: string;
  transform: (a: Utente)=>string;
}