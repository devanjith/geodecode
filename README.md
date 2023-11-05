# GeoDecode

*Fast offline city-scoped reverse geocoding*

## Usage

```bash
# install package
yarn add geodecode
```

```typescript
import { nearest } from 'geodecode'

const coord = { latitude: -18.38446, longitude: -55.36554 };
const nearestCities = await nearest(coord, 2);
console.log(nearestCities);
/*
[
  [
    {
      name: "Rio Verde de Mato Grosso",
      latitude: -18.91806,
      longitude: -54.84417,
      countryCode: "BR"
    }, 0.5565556369000046
  ], [
    {
      name: "Coxim",
      latitude: -18.50667,
      longitude: -54.76,
      countryCode: "BR"
    }, 0.38161397570000566
  ]
]
*/
```

> NOTE: First fetch will be slower due to k-d tree caching.

## License

MIT
