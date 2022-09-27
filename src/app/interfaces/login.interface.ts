export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResp {
  token: string;
  message: string;
}
