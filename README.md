# remix-expo

Remix and Expo! Web and Mobile! The best of both worlds!

`remix-expo` is a full-stack, cross-platform, multi-client Monorepo built with Remix and Expo.

**Share React Native components between Web and Mobile Applications!**

## What's inside?

This architecture uses [Turborepo](https://turborepo.org/) and [PNPM](https://pnpm.io) as build system and package manager. It includes the following packages/apps:

## Quick Start

  + Install pnpm: `npm install pnpm -g`
  + clone the repo: `git clone github.com/tyrauber/remix-expo`
  + Install the dependencies: `pnpm install`
  + Build all packages: `pnpm build`
  + Run all packages: `pnpm dev`
  
Open the urls printed in the console output:

```
@remix-expo/expo:dev: [09:25:05] Developer tools running on [http://localhost:19002](http://localhost:19002)
@remix-expo/remix:dev: Remix App Server started at [http://localhost:3000](http://192.168.1.56:3000)
```

### Apps and Packages

- `expo`: a [Expo](https://expo.io) mobile app
- `remix`: a [Remix](https://remix.run/) web app
- `ui`: a stub [ReactNative](https://reactnative.dev/) component library shared by both `expo` and `remix` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Stack:

Built on the backs of giants:

  - [TypeScript](https://www.typescriptlang.org/) for static type checking
  - [ESLint](https://eslint.org/) for code linting
  - [Prettier](https://prettier.io) for code formatting
  - [Turborepo](https://turborepo.org/) for build system
  - [PNPM](https://pnpm.io/) - for package management
  - [ReactNative](https://reactnative.dev/) - for front-end framework
  - [Postgresql](https://www.postgresql.org) - for database
  - [Prisma](https://www.prisma.io/) - for database orm
  - [Remix](https://remix.run/) - for web framework
  - [Expo](https://expo.io) - for mobile application framework
  - [Docker](https://www.docker.com/) - for application containers
  - [Fly.io](https://fly.io) - for cloud infrastructure

Special thanks to all the amazing engineers making my life easier. Respect.

**Important:**

This stack - using Remix and Expo together - requires the use of [PNPM](https://pnpm.io/). Yarn or NPM **will not** work.  Remix does not use Babel or Webpack, but ESBuild, which has limited module aliasing, so this repository uses the PNPM package manager to handle the `react-native` to `react-native-web` module aliasing. This solution was discovered and documented in [react-native-web-remix-setup](https://horus.dev/blog/react-native-web-remix-setup). Thanks [Horus Lugo](https://github.com/HorusGoul)!


## Usage

  - Setup
    + Install pnpm: `npm install pnpm -g`
    + clone the repo: `git clone github.com/tyrauber/remix-expo`
    + Install the dependencies: `pnpm install`
    + Build all packages: `pnpm build`
    + Run all packages: `pnpm dev`

  - Mobile
    + Dashboard: `pnpm expo start`
    + iOS Simulator: `pnpm  expo ios`

  - Web
    + Run locally: `pnpm  remix dev`
    + Deploy to Fly.to:  `pnpm fly deploy`
    + Build: `pnpm image:build`
    + Test Locally: `pnpm image:run`


## About

Expo is absolutely amazing... for mobile application development.  While Expo can run in the browser, it doesn't provide all the bells and whistles required for running and scaling a production web application - specifically the lack of Page Metadata, an API and Database, Caching, and Server Side Rendering.  In the past, Expo has suggested using Next.js for web applications, but Next.js brings it's own set of challenges.  

Recently, the developers behind React Router released Remix, a react web application framework. After reading through the Remix tutorials, and being thoroughly impressed with the breadth of functionality and simplicity of architecture, I decided to take stab at the integration of Expo and Remix.

This project is the result. Issues and Pull Requests welcome.