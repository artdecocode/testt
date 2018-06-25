# testt

[![npm version](https://badge.fury.io/js/testt.svg)](https://npmjs.org/package/testt)

`testt` is a new Node.js npm package. A test package to show the capabilities.

```sh
yarn add -E testt
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`testt(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import testt from 'testt'
```

### `testt(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import testt from 'testt'

(async () => {
  await testt()
})()
```

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
