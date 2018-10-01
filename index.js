#!/usr/bin/env node
const program = require('commander')
const { init } = require('./src/commands')

init(program, process)
