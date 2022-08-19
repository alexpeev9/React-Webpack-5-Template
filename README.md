# React Webpack 5 Template

That is a simple **starter template** for building a **React App**. It is deployed on **Netlify**, and you can view it **[here](https://react-webpack-5-template.netlify.app)**.

## Features

- **[React 18](https://facebook.github.io/react/)**
- **[Typescript](https://www.npmjs.com/package/typescript)**
- **[Webpack 5](https://www.npmjs.com/package/webpack)** with **[Babel](https://www.npmjs.com/package/Babel)**
- **[Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)** and **[Hot Reload](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin)**
- **Image**, **CSS**, and **SASS Support**
- **Development** and **Production Build**
- **Testing** with **[React-Testing-Library](https://www.npmjs.com/package/@testing-library/react)** and **[Jest](https://www.npmjs.com/package/jest)**
- **[ESLint](https://www.npmjs.com/package/eslint)** and **[Prettier](https://www.npmjs.com/package/prettier) Config**
- **[Husky](https://www.npmjs.com/package/husky)** for **GitHub** commits and pushes

## Requirements

- **[Node.js](https://nodejs.org/)** v16 or newer
- **[Yarn](https://yarnpkg.com/)** package manager
- **[VS Code](https://code.visualstudio.com/)** editor

## Getting Started

**[Generate](https://github.com/alexpeev9/React-Webpack-5-Template/generate)** a new project
from this template, **clone** it, and **install** project dependencies.

```shell
git clone https://github.com/alexpeev9/React-Webpack-5-Template.git example
cd ./example
yarn install
yarn start
```

The app will become available at **[http://localhost:3000](http://localhost:3000/)**.

## Scripts

- `yarn start` — **Launches** the app in **development mode** on [`http://localhost:3000`](http://localhost:3000/).
- `yarn build` — **Compiles** and **bundles** the app for **deployment**.
- `yarn test` - **Run unit tests** with **Jest**, and **React-Testing-Library**.
- `yarn lint:watch` — **Displays** all **bad-formatted code** on the console.
- `yarn lint:fix` — **Fixes** all **bad-formatted code**.

## Branches

There are **five additional branches**, and on each one of them, you can see the template with only specific features.
Example:

- The **[2-Add-Jest](https://github.com/alexpeev9/React-Webpack-5-Template/tree/2-Add-Jest)** branch has **Webpack** and **Jest**.
- The **[3-Add-ESLint](https://github.com/alexpeev9/React-Webpack-5-Template/tree/3-Add-ESLint)** branch has **Webpack**, **Jest** and **ESLint**.

## Deploying

If you are deploying the app to sites like **[Netlify](netlify.com)**, **[Vercel](vercel.com)**, and others be sure to:

- Change **build command** to `npm run build` because some sites don't work with **yarn**.
- Define the **publish directory** to `build/`.
- Set an **environment variable** `NODE_ENV` to `production`, so that it doesn't install the **dev-dependencies**.
