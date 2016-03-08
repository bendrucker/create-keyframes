'use strict'

var test = require('tape')
var Keyframes = require('./')
var css = require('./css')

test(function (t) {
  var id = Keyframes({from: {color: 'red'}})
  var id2 = Keyframes({from: {color: 'red'}})
  t.equal(id, id2, 'caches by keyframe content')
  t.end()
})

test('css', function (t) {
  var styles = css('id', {
    from: {
      fontSize: '12px'
    },
    50: {
      fontSize: '13px'
    }
  })

  t.equal(styles, `
    @keyframes id{50%{font-size:13px;}from{font-size:12px;}}@-webkit-keyframes id{50%{font-size:13px;}from{font-size:12px;}}
  `.trim())

  t.end()
})
