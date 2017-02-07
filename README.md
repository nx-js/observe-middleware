# The observe middleware

The `observe` middleware wraps the state in an observable and handles observability.

- name: observe
- middleware dependencies: none
- all middleware dependencies: none
- type: component or content middleware
- [docs](http://nx-framework.com/docs/middlewares/observe)

## Installation

`npm install @nx-js/observe-middleware`

## Usage

```js
const component = require('@nx-js/core')
const observe = require('@nx-js/observe-middleware')

component()
  .useOnContent(observe)
  .register('observing-comp')
```
