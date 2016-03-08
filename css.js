'use strict'

var toCss = require('to-css')
var dash = require('camel-2-dash')

var prefixes = ['', '-webkit']

module.exports = CssKeyframes

function CssKeyframes (id, config) {
  var styles = prefixes.reduce(function (acc, prefix) {
    var property = '@' + [prefix, 'keyframes'].filter(Boolean).join('-')
    acc[property + ' ' + id] = config
    return acc
  }, {})

  return toCss(styles, {
    selector: function (value) {
      return numeric(value) ? value + '%' : value
    },
    property: dash
  })
}

function numeric (value) {
  return /^\d+$/.test(value)
}
