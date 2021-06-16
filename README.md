# koa-assessment

This assessment consists of a url-shortener service.

## Installation

Use [yarn](https://classic.yarnpkg.com/en/) command to install the necessary node modules.

```bash
yarn install
```

## Usage

```bash
yarn start
```

Once running, you can do a POST request to root ("/") containing a JSON with the following body:

```json
{
  "longUrl": "https://...."
}
```

The API will return the shortened URL which will redirect to the initial URL.

## License

[MIT](https://choosealicense.com/licenses/mit/)
