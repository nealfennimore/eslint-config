[![npm version](https://badge.fury.io/js/eslint-config-nfen.svg)](https://badge.fury.io/js/eslint-config-nfen)

# Personal Eslint Config

## Default

### Installation

```sh
npm i -D eslint eslint-config-nfen eslint-config-airbnb
```

### Usage

```js
{
    "root": true,
    "extends": [
        "nfen"
    ],
    "parser": "babel-eslint"
}
```

## React

### Installation

```sh
npm i -D eslint eslint-config-nfen eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### Usage

```js
{
    "root": true,
    "extends": [
        "nfen/react"
    ],
    "parser": "babel-eslint"
}
```

## Imports

### Installation

```sh
npm i -D eslint eslint-config-nfen eslint-config-airbnb eslint-plugin-import
```

### Usage

```js
{
    "root": true,
    "extends": [
        "nfen",
        "nfen/plugins/import"
    ],
    "parser": "babel-eslint"
}
```
