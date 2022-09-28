[![cover]][site]

<p align="center">
  <a href="https://indonesia-api.netlify.app/regions-of-indonesia"><img src="https://raw.githubusercontent.com/indonesia-api/indonesia-api/main/public/Badge.svg?sanitize=true" /></a>
</p>

# Regions of Indonesia

Regions of Indonesia

## Features

- Integrated with [Javascript client SDK][github:client]

## Types

```typescript
type CodeName = {
  code: string;
  name: string;
};
```

## Endpoints

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

[![][support:ko-fi-button]][support:ko-fi]

[![][support:trakteer-button]][support:trakteer]

## LICENSE

GPL-3.0

[cover]: https://raw.githubusercontent.com/regions-of-indonesia/regions-of-indonesia/main/public/Cover.png?sanitize=true
[site]: https://regions-of-indonesia.netlify.app
[docs]: https://regions-of-indonesia-docs.netlify.app
[github:api]: https://github.com/regions-of-indonesia/api
[github:static-api]: https://github.com/regions-of-indonesia/static-api
[github:site]: https://github.com/regions-of-indonesia/site
[github:docs]: https://github.com/regions-of-indonesia/docs
[github:client]: https://github.com/regions-of-indonesia/client
[github:data]: https://github.com/regions-of-indonesia/data
[github:php-client]: https://github.com/regions-of-indonesia/php-client
[github:dart-client]: https://github.com/regions-of-indonesia/dart-client
[github:python-client]: https://github.com/regions-of-indonesia/python-client
[github:swr]: https://github.com/regions-of-indonesia/swr
[github:react-query]: https://github.com/regions-of-indonesia/react-query
[github:solid-query]: https://github.com/regions-of-indonesia/solid-query
[github:example-react-ts]: https://github.com/regions-of-indonesia/example-react-ts
[github:example-react-ts-swr]: https://github.com/regions-of-indonesia/example-react-ts-swr
[github:example-react-ts-query]: https://github.com/regions-of-indonesia/example-react-ts-query
[github:example-solid-ts]: https://github.com/regions-of-indonesia/example-solid-ts
[github:example-solid-ts-query]: https://github.com/regions-of-indonesia/example-solid-ts-query
[support:ko-fi]: https://ko-fi.com/flamrdevs
[support:ko-fi-button]: https://flamrdevs.vercel.app/ko-fi.png
[support:trakteer]: https://trakteer.id/flamrdevs
[support:trakteer-button]: https://flamrdevs.vercel.app/trakteer.png
