export interface IVehicle {
  id?: string;
  description: string;
  year: number;
  make: number;
  capacity: number;
  active: boolean;
}

export interface IVehicleResp {
  data: [
    {
      id: string;
      description: string;
      year: number;
      make: number;
      capacity: number;
      active: boolean;
    }
  ];
}

export interface IVehicleRespOne {
  data: {
    id: string;
    description: string;
    year: number;
    make: number;
    capacity: number;
    active: boolean;
  };
}
