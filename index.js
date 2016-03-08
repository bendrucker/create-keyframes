'use strict'

var cuid = require('cuid')
var insert = require('insert-styles')
var css = require('./css')

module.exports = Keyframes

var cache = {}

function Keyframes (config) {
  var key = JSON.stringify(config)
  if (cache[key]) return cache[key]

  var id = cuid()
  cache[key] = id

  var styles = css(id, config)
  insert(styles)

  return id
}
