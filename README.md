# remix-expo

Remix and Expo! Web and Mobile! The best of both worlds!

`remix-expo` is a full-stack, cross-platform, multi-client Monorepo built with Remix and Expo.

**Share React Native components between Web and Mobile Applications!**

## What's inside?

This architecture uses [Turborepo](https://turborepo.org/) and [PNPM](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `mobile`: a [Expo](https://expo.io) mobile app
- `web`: a [Remix](https://remix.run/) web app
- `ui`: a stub [ReactNative](https://reactnative.dev/) component library shared by both `web` and `mobile` applications
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

This stack - using Remix and Expo together - requires the use of [PNPM](https://pnpm.io/). Yarn or NPM **will not** work. 

Remix does not use Babel or Webpack, but ESBuild, which has limited module aliasing, so this repository uses the PNPM package manager to handle the `react-native` to `react-native-web` module aliasing.

For more information see the detailed explanation below.

## Usage

  - Setup
    + Install pnpm: `npm install pnpm -g`
    + clone the repo: `git clone github.com/tyrauber/remix-expo`
    + Install the dependencies: `pnpm install --shamefully-hoist`

  - Mobile
    + Dashboard: `pnpm expo start`
    + iOS Simulator: `pnpm  expo ios`

  - Web
    + Run locally: `pnpm  remix dev`
    + Deploy to Fly.to:  `pnpm fly deploy`
    + Build: `pnpm docker:build`
    + Test Locally: `pnpm rdocker:test`


## About

Expo is absolutely amazing... for mobile application development.  While Expo can run in the browser, it doesn't provide all the bells and whistles required for running and scaling a production web application - specifically the lack of Page Metadata, an API and Database, Caching, and Server Side Rendering.  In the past, Expo has suggested using Next.js for web applications, but Next.js brings it's own set of challenges.  

Recently, the developers behind React Router released Remix, a react web application framework. After reading through the Remix tutorials, and being thoroughly impressed with the breadth of functionality and simplicity of architecture, I decided to take stab at the integration of Expo and Remix.

## Challenges

The main challenge in getting Remix and Expo to play nicely is module aliasing - specifically aliasing `react-native` and `react-native-web`.

To use `react-native` components on the web, the `react-native` library must be "aliased" for `react-native-web`, as `react-native` will not work outside of native application platforms. This is typically done using Babel or Webpack. 

Unfortunately, the speed and performance of Remix is in large part due to the simplicity of it's esbuild pipeline, but without Babel or Webpack the only options for module aliasing is through tsconfig paths. Further, Remix itself limits how your can import and bundle modules (presumably to help control bundle size and speed).

## Solution

Use PNPM. PNPM allows you to alias modules at the package level, negating the need for other react-native methods of aliasing.  As discovered and documented this in [react-native-web-remix-setup](https://horus.dev/blog/react-native-web-remix-setup). Thanks [Horus Lugo](https://github.com/HorusGoul)!

Then it's just a matter of getting Expo to work with Monorepos.  As [Cedric van Putten](https://github.com/byCedric), the Expo Monorepo expert detailed here, "That's not an issue related to pnpm, or Expo. It's just how Metro explains it can't find packages. I got it working with the `--shamefully-hoist` flag, and going over the steps in [Working with Monorepos](https://docs.expo.dev/guides/monorepos/), in case it helps. [byCedric/eas-monorepo-example#19](https://github.com/byCedric/eas-monorepo-example/pull/19)
".

# Open Issues:

Issues, blockers and things to watch out for.

  - You definitely need to use PNPM
  - You definitely need a `pmpm-workspace.yaml` file
  - You definitely need a .npmrc file with `node-linker=hoisted`
  - You cannot use yarn workspaces - Adding workspaces to your package.json will create all sorts of issues.
  - You must alias react-native in the remix package.json with `"react-native": "npm:react-native-web@^0.17.5",`


## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (PNPM).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
