export interface ISchedule {
  id?: string;
  route_id: string;
  week_num: number;
  from: Date;
  to: Date;
  active: boolean;
}

export interface IScheduleResp {
  data: [
    {
      id: string;
      route_id: string;
      week_num: number;
      from: Date;
      to: Date;
      active: boolean;
    }
  ];
}

export interface IScheduleRespOne {
  data: {
    id: string;
    route_id: string;
    week_num: number;
    from: Date;
    to: Date;
    active: boolean;
  };
}
