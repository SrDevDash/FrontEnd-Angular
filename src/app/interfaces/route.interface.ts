export interface IRoute {
  id?: string;
  description: string;
  driver_id: number;
  vehicle_id: number;
  active: boolean;
}

export interface IRouteResp {
  data: [
    {
      id: string;
      description: string;
      driver_id: number;
      vehicle_id: number;
      active: boolean;
    }
  ];
}

export interface IRouteRespOne {
  data: {
    id: string;
    description: string;
    driver_id: number;
    vehicle_id: number;
    active: boolean;
  };
}
