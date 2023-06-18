const assert = require('assert');

const { splitString } = require('./air00')
const { addOrSous, getArgumentsIntoIntegerArray, setShowErrorMessage } = require('./air04.js');
const MyTools = require('./MyTools');
const myTools = new MyTools();

/**
 * AIR00 TESTS
 */
function testSplitString() {
  const inputString = "Hello world, how are you today?";
  const separator = " ";
  const expectedResult = "Hello\nworld,\nhow\nare\nyou\ntoday?";

  const result = splitString(inputString, separator);
  assert.strictEqual(result, expectedResult);
}
/**
 * AIR04 TESTS
 */
function testAddOrSous() {
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile', 5, 3, "+1"];
  const expectedResult = [6, 4];

  const result = addOrSous(argsArray);
  assert.deepStrictEqual(result, expectedResult);
}
function testGetArgumentsIntoIntegerArray(){
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile', "5", "3", "+1"];
  const expectedResult = {
    inputArray: [5,3],
    separator: "+1"
  };
  const result = getArgumentsIntoIntegerArray(argsArray);
  assert.deepStrictEqual(result, expectedResult);
}


function testMinArgsCountCheck() {
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile'];
  const expectedResult = false;
  const result = myTools.checkMinArgumentCount(2, argsArray);
  assert.strictEqual(result, expectedResult);
}

setShowErrorMessage(false);

function runTests() {
    runTest(testSplitString,'air00 (1/1)');
    runTest(testAddOrSous, 'air04 (1/3)');
    runTest(testGetArgumentsIntoIntegerArray, 'air04 (2/3)');
    runTest(testMinArgsCountCheck, 'air04 (3/3)');
}

function runTest(testFunction, testName){
  try{
  testFunction();
  console.log(testName, "\x1b[32m", 'success', '\x1b[0m')
  }catch (error){
    if (error instanceof assert.AssertionError) {
      console.error(testName, 'failed');
    } else {
      console.error('Test failed:', error.message);
    }
  }
}

runTests();