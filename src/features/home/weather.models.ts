export type Weather = {
  coord: Coord;
  weather?: (WeatherEntity)[] | null;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export type Coord = {
  lon: number;
  lat: number;
}
export type WeatherEntity = {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export type Main = {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export type Wind = {
  speed: number;
  deg: number;
}
export type Rain = {
}
export type Clouds = {
  all: number;
}
export type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
