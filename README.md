# symbol-creator

Ponyfill for envs without `Symbol()`.

## Installation

```bash
npm install symbol-creator --save
```

## Usage

```js
var createSymbol = require("symbol-creator").createSymbol;

// If no `Symbol` available on environment, `@@symbol/foo-de34` will be created.
var foo = createSymbol("foo");

// You can omit name "@@symbol/-5iq3"
var bar = createSymbol();
```

### `getSymbolCreator`

Sometimes you may need namespace for your symbols.

```js
var getSymbolCreator = require("symbol-creator").getSymbolCreator;

var createSymbolA = getSymbolCreator("namespaceA");
var createSymbolB = getSymbolCreator("namespaceB");

// "@@namespaceA/foo-c5eh"
var a = createSymbolA("foo");

// "@@namespaceB/foo-2ucc"
var b = createSymbolB("foo");
```

### You can use imports

```js
import { createSymbol, getSymbolCreator } from "symbol-creator";
// or ES2015
const { createSymbol, getSymbolCreator } = require("symbol-creator");
```
