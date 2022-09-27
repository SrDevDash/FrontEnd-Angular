export interface IDriver {
  id?: string;
  last_name: string;
  first_name: string;
  ssd: string;
  dob: Date;
  address: string;
  city: string;
  zip: string;
  phone: number;
  active: boolean;
}

export interface IDriverResp {
  data: [
    {
      id: string;
      last_name: string;
      first_name: string;
      ssd: string;
      dob: Date;
      address: string;
      city: string;
      zip: string;
      phone: number;
      active: boolean;
    }
  ];
}

export interface IDriverRespOne {
  data: {
    id: string;
    last_name: string;
    first_name: string;
    ssd: string;
    dob: Date;
    address: string;
    city: string;
    zip: string;
    phone: number;
    active: boolean;
  };
}
