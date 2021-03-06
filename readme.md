# Example for React-ESC 
[![Build Status](https://travis-ci.org/TriPSs/react-esc-example.svg?branch=master&style=flat-square)](https://travis-ci.org/TriPSs/react-esc-example?branch=master) [![](https://img.shields.io/github/issues-raw/tripss/react-esc-example.svg?style=flat-square)](https://github.com/tripss/react-esc-example/issues) [![](https://img.shields.io/david/tripss/react-esc-example.svg?style=flat-square)](https://david-dm.org/tripss/react-esc-example#info=dependencies) [![devDependencies Status](https://david-dm.org/tripss/react-esc-example/dev-status.svg?style=flat-square)](https://david-dm.org/tripss/react-esc-example?type=dev) [![codecov](https://codecov.io/gh/TriPSs/react-esc-example/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/TriPSs/react-esc-example)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tripss/react-esc-example.svg)](http://isitmaintained.com/project/tripss/react-esc-example "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/tripss/react-esc-example.svg)](http://isitmaintained.com/project/tripss/react-esc-example "Percentage of issues still open")

> Example repo for React-ESC

###### This project is based on [universal-react-redux-starter-kit](https://github.com/janoist1/universal-react-redux-starter-kit)

### Install dependencies, and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```
If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`start:dev`|Same as `start` but overrides `NODE_ENV` to "development".|
|`start:prod`|Serves your app at `localhost:3000`. Production environment.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|

### Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── bin                         # Build/Start scripts
├── build                       # All build-related configuration
│   └── karma                   # Configuration file for karma
├── config                      # Project configuration settings
├── src                         # Application source code
│   ├── client.js               # Application bootstrap and rendering
│   ├── components              # Reusable Presentational Components
│   ├── containers              # Reusable Container Components
│   ├── layouts                 # Components that dictate major page structure
│   ├── modules                 # Modules that deserve a separate file
│   ├── routes                  # Main route definitions and async split points
│   │   ├── index.js            # Bootstrap main application routes with store
│   │   └── Home                # Fractal route
│   │       ├── components      # Route specific components
│   │           └── index.js    # Exports all the route specific components
│   │       ├── index.js        # Route definitions and async split points
│   │       ├── assets          # Assets required to render components
│   │       ├── HomeActions     # Collections of actions
│   │       ├── HomeComponent   # Presentational React Components
│   │       ├── HomeConstants   # Collections of constants
│   │       ├── HomeContainer   # Connect components to actions and store
│   │       ├── HomeReducer     # Components reducer
│   │       ├── HomeSelectors   # Collections of selectors
│   │       └── routes **       # Fractal sub-routes (** optional)
│   ├── static                  # Static assets (not imported anywhere in source code)
│   ├── store                   # Redux-specific pieces
│   │   └── middleware          # All the projects middlewares
│   │       └── index.js        # Containg a function exporting a array of the middleware collection
│   │   └── reducers.js         # Reducer registry and injection
│   └── styles                  # Application-wide styles (generally settings)
└── tests                       # Unit tests
```

### Routing
We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

### Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. If you are using `redux-cli`, test files should automatically be generated when you create a component or redux module.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.

### Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run deploy` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

### Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/index.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|
|`__DEBUG__`|True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)|
|`__BASENAME__`|[history basename option](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)|

### Styles

Both `.scss` and `.css` file extensions are supported out of the box and are configured to use [CSS Modules](https://github.com/css-modules/css-modules). After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

### Server

This starter kit comes with [React-ESC](https://github.com/TriPSs/react-esc) (Easy to use Client and Server) who handles the complete server side and client rendering so you can focus on what you love.

#### Migrate server to own project
If you don't want to use [React-ESC](https://github.com/TriPSs/react-esc) you can run `npm run eject` to convert it to your own project.

### Known possible errors
#### Dyld: Library not loaded
Installing on some versions of OSX may raise errors with a [missing libpng dependency](https://github.com/tcoopman/image-webpack-loader/issues/51#issuecomment-273597313): 
```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
```
This can be remedied by installing the newest version of libpng with [homebrew](http://brew.sh/):

```sh
brew install libpng
```

## [License](https://github.com/tripss/react-esc/blob/master/LICENSE)

> Internet Systems Consortium license
> ===================================
>
> The MIT License (MIT)
>  
> Copyright (c) 2015 David Zukowski
>  
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>  
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>  
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## Collaboration

If you have questions or issues, please [open an issue](https://github.com/TriPSs/react-esc/issues)!