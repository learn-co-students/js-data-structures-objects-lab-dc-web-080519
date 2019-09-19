// Write your solution in this file!
console.log("as you wish")

let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  let newDriver = { ...obj };
  newDriver[key] = value;
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value})
  // const toAdd = updateDriverWithKeyAndValue(obj, key, value)
  // return Object.assign(driver, toAdd)
}

function deleteFromDriverByKey(obj, key) {
  let newObj = { ...obj };
  // debugger
  delete newObj[key]
  // debugger
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}

let testObj = {letter: 't', emotion: "happy"}
// deleteFromDriverByKey()
