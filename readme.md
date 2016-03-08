# create-keyframes [![Build Status](https://travis-ci.org/bendrucker/create-keyframes.svg?branch=master)](https://travis-ci.org/bendrucker/create-keyframes)

> Create a CSS keyframe animation in JavaScript


## Install

```
$ npm install --save create-keyframes
```


## Usage

```js
var Keyframes = require('create-keyframes')

var animation = Keyframes({
  0: {
    top: 0
  },
  100: top: 10
})
element.style.animation = animation + ' 1s'
```

Creates a normal declaration and `@-webkit-keyframe`.

## API

#### `Keyframes(data)` -> `string`

Returns the keyframe name. Caches the name so the same value will be returned for any future call with the same `data`.

##### data

*Required*  
Type: `object`

Keyframe animation data. Can be `{from, to}` or percentages (`{0, 25, 100}`). The CSS for each frame may be provided in camel case, e.g. `{fontSize: '12px'`.

## License

MIT © [Ben Drucker](http://bendrucker.me)
