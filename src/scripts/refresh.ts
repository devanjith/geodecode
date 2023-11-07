import { citiesFilePath, citiesUrl } from '../config'
import { downloadCities } from '../tools/preprocess'
import { writeFile } from 'fs/promises'

const refreshCities = async () => {
  const cities = await downloadCities(citiesUrl)
  await writeFile(citiesFilePath, JSON.stringify({ cities }), 'utf8')
}

refreshCities()
