import AdmZip from 'adm-zip'
import { City } from '../models'

export const downloadCities = async (citiesUrl: string, outputPath: string) => {
  const response = await fetch(citiesUrl)
  const zip = new AdmZip(
    Buffer.from(await (await response.blob()).arrayBuffer())
  )
  const cities = zip
    .getEntries()[0]
    .getData()
    .toString('utf-8')
    .split('\n')
    .slice(0, -1)
    .map<City>((cityLine) => {
      const lineData = cityLine.split('\t')
      return {
        name: lineData[2],
        latitude: parseFloat(lineData[4]),
        longitude: parseFloat(lineData[5]),
        countryCode: lineData[8]
      }
    })
  return cities
}
