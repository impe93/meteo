export type Forecast = {
  cod: string;
  message: number;
  cnt: number;
  list?: (ListEntity)[] | null;
  city: City;
}
export type ListEntity = {
  dt: number;
  main: Main;
  weather?: (WeatherEntity)[] | null;
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}
export type Main = {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export type WeatherEntity = {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export type Clouds = {
  all: number;
}
export type Wind = {
  speed: number;
  deg: number;
}
export type Rain = {
  '3h': number;
}
export type Sys = {
  pod: string;
}
export type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export type Coord = {
  lat: number;
  lon: number;
}
