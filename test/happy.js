/* Copyright (c) 2019 Voxgig Ltd. and other contributors, MIT License */
'use strict'

const Seneca = require('seneca')

var seneca = Seneca().test()

seneca
  .add('a:1', function(msg, reply) {
    reply({x:msg.a})
  })
  .act('a:1', function(err, out) {
    if(1 !== out.x) throw new Error('bad')
  })
