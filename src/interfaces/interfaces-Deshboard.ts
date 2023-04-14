import { ISubTypes } from "./interfaces-BurgerForms";

export type TStatus = ISubTypes;

export interface IBurgers {
  nome: string;
  carne: string;
  pao: string;
  opcionais: string[];
  status: string;
  id: number;
}

export interface IPropsDeshboard {
  burgers: IBurgers[];
  burger_Id: number;
  status: TStatus[];
  msg: string;
}
