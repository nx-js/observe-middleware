'use strict'

const observer = require('@nx-js/observer-util')

function observe (node, state) {
  node.$contextState = observer.observable(node.$contextState)
  node.$state = observer.observable(node.$state)

  node.$observe = $observe
}
observe.$name = 'observe'
module.exports = observe

function $observe (fn, ...args) {
  args.unshift(fn, this)
  const signal = observer.observe.apply(null, args)
  this.$cleanup(unobserve, signal)
  return signal
}

function unobserve (signal) {
  signal.unobserve()
}
