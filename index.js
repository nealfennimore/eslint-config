module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "plugins": [
        "react"
    ],
    "ecmaFeatures": {
      "arrowFunctions": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "modules": false,
      "generators": false,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": false,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "jsx": true
    },
    "rules": {
        "quotes": [2, "single"],
        "indent": [2, 4],
        "semi": [2, "always"],

        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],

        "no-console": 1,
        "no-alert": 1,
        "no-debugger": 2,

        "no-shadow": 2,

        "camelcase": 2,
        "yoda": [2, "never"],
        "strict": [1, "global"],
        "no-mixed-requires": 1
    }
}
