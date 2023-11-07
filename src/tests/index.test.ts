import { describe, expect, it } from 'bun:test'
import { nearest } from '../index'

describe('nearest', () => {
  it('should return the nearest city', async () => {
    const result = await nearest({
      latitude: 37.7749,
      longitude: -122.4194
    })
    expect(result).toEqual([
      [
        {
          name: 'San Francisco',
          countryCode: 'US',
          latitude: 37.77493,
          longitude: -122.41942
        },
        0.0000000012999999999726241
      ]
    ])
  })

  it('should return the nearest cities when count is greater than 1', async () => {
    const result = await nearest(
      {
        latitude: 37.7749,
        longitude: -122.4194
      },
      2
    )
    expect(result).toEqual([
      [
        {
          name: 'San Francisco',
          countryCode: 'US',
          latitude: 37.77493,
          longitude: -122.41942
        },
        0.0000000012999999999726241
      ],
      [
        {
          name: 'Mission District',
          countryCode: 'US',
          latitude: 37.75993,
          longitude: -122.41914
        },
        0.00022416850000015596
      ]
    ])
  })
})
