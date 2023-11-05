import { citiesJsonPath, citiesUrl } from './config'
import { CachedData, City, Coord } from './models'
import { downloadCities } from './tools/preprocess'
import * as kdt from 'kdt'

const cache: CachedData = {
  kdTree: undefined
}

export const nearest = async (coordinates: Coord, count: number = 1) => {
  await initKdTree()
  if (cache.kdTree !== undefined)
    return cache.kdTree.nearest(coordinates, count)
  throw Error('k-d tree is not initialized')
}

const distance = (a: City, b: City) =>
  Math.pow(a.latitude - b.latitude, 2) + Math.pow(a.longitude - b.longitude, 2)

const initKdTree = async () => {
  if (cache.kdTree !== undefined) return
  if (!(await Bun.file(citiesJsonPath).exists()))
    await downloadCities(citiesUrl, citiesJsonPath)
  const cities: City[] = JSON.parse(await Bun.file(citiesJsonPath).text())
  cache.kdTree = kdt.createKdTree(cities, distance, ['latitude', 'longitude'])
}
