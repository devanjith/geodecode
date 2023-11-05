# GeoDecode

*Fast offline city-scoped reverse geocoding*

## Usage

```bash
# install package
yarn add geodecode
```

```typescript
import { nearest } from 'geodecode'

const coord = { latitude: -18.38446, longitude: -55.36554 }
const nearestCities = nearest(coord, 5)
```

## License

MIT
