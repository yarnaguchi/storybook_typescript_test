### 環境作成

- [Create React App](https://github.com/facebook/create-react-app)

```sh
npx create-react-app my-app --template typescript
```

- [ESlint](https://github.com/eslint/eslint)

```sh
eslint --init
```

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```sh
yarn add -D eslint-plugin-react-hooks
```

edit eslint config

```JSON
{
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

```sh
yarn add -D eslint-plugin-react
```

edit eslint config

```JSON
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}
```

- [Material-UI](https://github.com/mui-org/material-ui)

```sh
yarn add @material-ui/core @material-ui/icons fontsource-roboto
```

React エントリポイントでインポート

```TypeScript
import 'fontsource-roboto';
```

- [Storybook](https://github.com/storybookjs/storybook)

```sh
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

```sh
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
