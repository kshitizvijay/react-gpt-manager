module.exports = {
    "parser": "babel-eslint",
    "extends": [
      "prettier",
      "plugin:prettier/recommended"
    ],
    "env": {
      "mocha": true,
      "browser": true
    },
    "globals": {
      "chai": true
    },
    "rules": {
      "comma-dangle": 0,
      "no-console": 0,
      "react/jsx-no-bind": 0,
      "arrow-body-style": 1,
      "no-nested-ternary": 0,
      "no-param-reassign": 0,
      "prefer-rest-params": 0,
      "max-len": 0,
      "no-continue": 0,
      "react/prefer-stateless-function": "off"
    }
  }