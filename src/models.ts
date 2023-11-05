export type Coord = {
  latitude: number
  longitude: number
}

export type City = {
  name: string
  countryCode: string
} & Coord

export type CityKdTree<T extends Coord, R> = {
  nearest: (coord: Coord, count: number) => [T[], R]
}

export type CachedData = {
  kdTree: CityKdTree<City, number> | undefined // TODO: Add and import kdt types from 'kdt'.
}
