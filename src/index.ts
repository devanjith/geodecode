import * as jsonData from './cities.json'
import { CachedData, City, CityKdTree, Coord } from './models'
// @ts-ignore
import * as kdt from 'kdt'

const cache: CachedData = {
  kdTree: undefined
}

export const nearest = async (coordinates: Coord, count: number = 1) => {
  if (cache.kdTree === undefined) {
    cache.kdTree = await initKdTree()
  }
  return cache.kdTree
    .nearest(coordinates, count)
    .toSorted((a, b) => a[1] - b[1])
}

const distance = (a: City, b: City) =>
  Math.pow(a.latitude - b.latitude, 2) + Math.pow(a.longitude - b.longitude, 2)

const initKdTree = async (): Promise<CityKdTree<City, number>> => {
  const cities = (jsonData as { cities: City[] })['cities']
  return kdt.createKdTree(cities, distance, ['latitude', 'longitude'])
}
