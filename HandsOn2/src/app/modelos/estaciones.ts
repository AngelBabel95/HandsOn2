export interface PistasIf {
  total: number;
  km: number;
  verdes: number;
  azules: number;
  rojas: number;
  remontes: number;
}

export interface ForfaitsIf {
  alta1: number;
  baja1: number;
  alta2: number;
  baja2: number;
  alta5: number;
  baja5: number;
}
export interface FotoIf {
  alt: string;
  source: string;
  info: string;
}
export class Estacion implements PistasIf, ForfaitsIf, FotoIf {
  // tslint:disable-next-line:max-line-length
  constructor(public url: string, public name: string, public total: number, public km: number, public verdes: number, public azules: number,
    public rojas: number , public remontes: number, public alta1: number, public baja1: number, public alta2: number, public baja2: number,
    public alta5: number, public baja5: number, public alt: string, public source: string, public info: string) {  }
}
