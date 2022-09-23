[![](./public/Cover.png)](https://regions-of-indonesia.netlify.app)

<p align="center">
  <a href="https://indonesia-api.netlify.app/regions-of-indonesia"><img src="https://raw.githubusercontent.com/indonesia-api/indonesia-api/main/public/Badge.svg?sanitize=true" /></a>
</p>

# Regions of Indonesia

Regions of Indonesia

## Features

- Support both [Dynamic API](https://github.com/regions-of-indonesia/api) & [Static API](https://github.com/regions-of-indonesia/static-api)
- Search API for Dynamic API
- [Javascript client SDK](https://github.com/regions-of-indonesia/client)
- Documented with in-app [DEMO](https://regions-of-indonesia.netlify.app)

## Roadmap

- [x] Plain data
- [x] Dynamic API & Static API
- [x] Javascript Client SDK
- [ ] Documentation
- [ ] PHP Client SDK
- [ ] Dart Client SDK
- [ ] Python Client SDK

## Types

```typescript
type CodeName = {
  code: string;
  name: string;
};
```

## Endpoints

### Static API

| Endpoint                                                                                                                    | Return type |
| --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [/provinces.json](https://regions-of-indonesia.github.io/static-api/provinces.json)                                         | CodeName[]  |
| [/province/11.json](https://regions-of-indonesia.github.io/static-api/province/11.json)                                     | CodeName    |
| [/province/11/districts.json](https://regions-of-indonesia.github.io/static-api/province/11/districts.json)                 | CodeName[]  |
| [/districts/11.json](https://regions-of-indonesia.github.io/static-api/districts/11.json)                                   | CodeName[]  |
| [/district/11.01.json](https://regions-of-indonesia.github.io/static-api/district/11.01.json)                               | CodeName    |
| [/district/11.01/subdistricts.json](https://regions-of-indonesia.github.io/static-api/district/11.01/subdistricts.json)     | CodeName[]  |
| [/subdistricts/11.01.json](https://regions-of-indonesia.github.io/static-api/subdistricts/11.01.json)                       | CodeName[]  |
| [/subdistrict/11.01.01.json](https://regions-of-indonesia.github.io/static-api/subdistrict/11.01.01.json)                   | CodeName    |
| [/subdistrict/11.01.01/villages.json](https://regions-of-indonesia.github.io/static-api/subdistrict/11.01.01/villages.json) | CodeName[]  |
| [/villages/11.01.01.json](https://regions-of-indonesia.github.io/static-api/villages/11.01.01.json)                         | CodeName[]  |
| [/village/11.01.01.2001.json](https://regions-of-indonesia.github.io/static-api/village/11.01.01.2001.json)                 | CodeName    |

## Support

- Donate [Ko-Fi](https://ko-fi.com/flamrdevs) or [Trakteer](https://trakteer.id/flamrdevs)

## LICENSE

GPL-3.0
