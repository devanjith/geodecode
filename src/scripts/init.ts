import { citiesJsonPath, citiesUrl } from '../config'
import { downloadCities } from '../tools/preprocess'

console.log('populating cities...')
downloadCities(citiesUrl, citiesJsonPath)
  .then(() => console.log('OK'))
  .catch((err) => console.error(err))
