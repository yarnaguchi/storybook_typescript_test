[![CI](https://github.com/YamaguchiRyuta/storybook_typescript_test/actions/workflows/main.yml/badge.svg)](https://github.com/YamaguchiRyuta/storybook_typescript_test/actions/workflows/main.yml)

### 参考

- [Running Tests](https://create-react-app.dev/docs/running-tests/)

### 環境作成

- [Create React App](https://github.com/facebook/create-react-app)

```bash
npx create-react-app storybook_typescript_test --template typescript
```

edit package.json

```JavaScript
{
  "scripts": {
    // ...
    "test": "react-scripts test --watchAll",
    "coverage": "yarn test -- --coverage"
  },
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!**/*.d.{js,jsx,ts,tsx}",
      "!**/*.stories.{js,jsx,ts,tsx}",
      "!**/__snapshots__/**",
      "!**/node_modules/**"
    ]
  }
}
```

- [ESlint](https://github.com/eslint/eslint)

```bash
yarn add eslint --dev
yarn run eslint --init
```

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```bash
yarn add -D eslint-plugin-react-hooks
```

edit eslint config

```JavaScript
{
  "env": {
    // ...
    'jest/globals': true,
    node: true,
  },
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ],
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
}
```

- [ESLint-plugin-React](https://github.com/yannickcr/eslint-plugin-react)

```bash
yarn add -D eslint-plugin-react
```

edit eslint config

```JSON
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
  },
}
```

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme)

```bash
yarn add --dev eslint eslint-plugin-jest
```

edit eslint config

```JSON
{
  "env": {
    "jest/globals": true
  },
  "extends": [
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
```

- [Prettier](https://github.com/prettier/prettier)

```
yarn add --dev --exact prettier
echo {}> .prettierrc.json
```

edit .prettierrc.json

```JSON
{
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true
}
```

edit package.json

```JavaScript
{
  "scripts": {
    // ...
    "prettier": "prettier --write . !build/**/* !coverage/**/* !public/**/* !storybook-static/**/*"
  }
}
```

- [Material-UI](https://github.com/mui-org/material-ui)

```bash
yarn add @material-ui/core @material-ui/icons fontsource-roboto
```

React エントリポイントでインポート

```TypeScript
import 'fontsource-roboto';
```

- [Storybook](https://github.com/storybookjs/storybook)

```bash
npx sb init

# Starts Storybook in development mode
yarn storybook
```

edit .env

```
SKIP_PREFLIGHT_CHECK=true
```

edit .gitignore

```
/storybook-static
```

- [gh-pages](https://github.com/tschaub/gh-pages)

```bash
yarn add -D gh-pages
```

edit package.json

```JSON
{
  "homepage": "https://yamaguchiryuta.github.io/storybook_typescript_test/",
  "scripts": {
    "deploy": "yarn run build-storybook & gh-pages -d storybook-static"
  }
}
```

### Deploy

- Storybook [page](https://yamaguchiryuta.github.io/storybook_typescript_test/)
