export interface User {
  email: string;
  name: string;
  time: number;
  latitude: number;
  longitude: number;
  wage: number;
  age: number;
  wdistance: number;
  blocked: Array<String>;
}

export interface Chat {
  message: string;
  pair: string;
  sender: string;
  time: number;
}