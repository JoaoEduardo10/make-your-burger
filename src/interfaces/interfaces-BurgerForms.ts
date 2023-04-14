export interface ISubTypes {
  id: number;
  tipo: string;
}

export interface IIngredientes {
  carnes: ISubTypes[];
  opcionais: ISubTypes[];
  paes: ISubTypes[];
}

export interface IPropsBurgerForms {
  name: string;
  bread: string;
  meat: string;
  option: [];
  breads: ISubTypes[];
  meats: ISubTypes[];
  optionsData: ISubTypes[];
  status: string;
  msg: string;
}
