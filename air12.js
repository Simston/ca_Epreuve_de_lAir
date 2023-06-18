const assert = require('assert');
const { addOrSous, getArgumentsIntoIntegerArray, setShowErrorMessage } = require('./air04.js');
const MyTools = require('./MyTools');
const myTools = new MyTools();


function testAddOrSous() {
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile', 5, 3, "+1"];
  const expectedResult = [6, 4];

  const result = addOrSous(argsArray);
  assert.deepStrictEqual(result, expectedResult);
  console.log('air04 (1/3)' + "\x1b[32m", 'success', '\x1b[0m');
}

function testGetArgumentsIntoIntegerArray(){
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile', "5", "3", "+1"];
  const expectedResult = {
    inputArray: [5,3],
    separator: "+1"
  };

  const result = getArgumentsIntoIntegerArray(argsArray);
  assert.deepStrictEqual(result, expectedResult);
  console.log('air04 (2/3)' + "\x1b[32m", 'success', '\x1b[0m');
}


function testMinArgsCountCheck() {
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile'];
  const expectedResult = false;

  const result = myTools.checkMinArgumentCount(2, argsArray);
  assert.strictEqual(result, expectedResult);
  console.log('air04 (3/3)' + "\x1b[32m", 'success', '\x1b[0m');
}

setShowErrorMessage(false);

function runTests() {
  try {
    testAddOrSous();
    testGetArgumentsIntoIntegerArray();
    testMinArgsCountCheck();
  } catch (error) {
    console.error("\x1b[31m", 'Test failed:', error.message);
  }
}

runTests();