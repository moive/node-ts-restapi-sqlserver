export interface IProduct {
  id?: string;
  name: string;
  description: string;
  quantity: number;
}

export interface IResponseProduct {
  ok: boolean;
  message?: string;
  errorRaw?: any;
  result?: any;
}
