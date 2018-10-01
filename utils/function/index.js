const compose = (...args) =>
  value =>
    args.reduceRight((acc, f) => f(acc), value)

const defaultTo = defaultValue =>
  value =>
    (value === null || value === undefined)
      ? defaultValue
      : value

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

const map = f =>
  arr =>
    Array.prototype.map.call(arr, f)

const filter = f =>
  arr =>
    Array.prototype.filter.call(arr, f)

const getProp = prop =>
  item =>
    item[prop]

const pipe = (...args) =>
  value =>
    args.reduce((acc, f) => f(acc), value)

const setProp = (prop, val) =>
  item => {
    item[prop] = val
    return item
  }

module.exports = {
  compose,
  pipe,
  getProp,
  setProp,
  filter,
  map,
  delay,
  defaultTo
}