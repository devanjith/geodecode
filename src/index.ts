import { citiesJsonPath, citiesUrl } from './config'
import { CachedData, City, CityKdTree, Coord } from './models'
import { downloadCities } from './tools/preprocess'
//@ts-ignore
import * as kdt from 'kdt'

const cache: CachedData = {
  kdTree: undefined
}

export const nearest = async (coordinates: Coord, count: number = 1) => {
  if (cache.kdTree === undefined) {
    cache.kdTree = await initKdTree()
  }
  return cache.kdTree.nearest(coordinates, count)
}

const distance = (a: City, b: City) =>
  Math.pow(a.latitude - b.latitude, 2) + Math.pow(a.longitude - b.longitude, 2)

const initKdTree = async (): Promise<CityKdTree<City, number>> => {
  const cities = await downloadCities(citiesUrl, citiesJsonPath)
  return kdt.createKdTree(cities, distance, ['latitude', 'longitude'])
}
