const assert = require('assert');

const { splitString, setShowErrorMessage } = require('./air00');
const { splitStringWithStringSeparator } = require('./air01');
const { findIntruders } = require('./air02');
const { cutSameCharInString } = require('./air03');
const { addOrSous, getArgumentsIntoIntegerArray } = require('./air04');
const { findStringInString, getArgsAndComparator, sanitaryPass } = require('./air05');
const { sortedInsert } = require('./air06');
/*
const {} = require('./air07');
const {} = require('./air08');
const {} = require('./air09');
const {} = require('./air10');
const {} = require('./air11');*/

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
 * AIR01 TESTS
 */
function testSplitStringWithStringSeparator() {
  const inputString = "Crevette magique dans la mer des étoiles";
  const separator = "la";
  const expectedResult = "Crevette magique dans \n mer des étoiles";

  const result = splitStringWithStringSeparator(inputString, separator);
  assert.strictEqual(result, expectedResult);
}
/**
 * AIR02 TESTS
 */
function testFindIntruders() {
  const inputArray = [1,2,3,4,5,4,3,2,1,8,15];
  const expectedResult = "5 8 15";

  const result = findIntruders(inputArray);
  assert.strictEqual(result, expectedResult);
}
/**
 * AIR03 TESTS
 */
function testCutSameCharInString(){
  const inputString = "Hello milady,  bien ou quoi ??";
  const expectedResult = "Helo milady, bien ou quoi ?";

  const result = cutSameCharInString(inputString);
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
/**
 * AIR05 TESTS
 */
function testFindStringInString(){
  const string1 = 'Ratatac';
  const string2 = 'a'
  const expectedResult = true;
  const result = findStringInString(string1, string2);
  assert.strictEqual(result, expectedResult);
}
function testGetArgsAndComparator(){
  const argsArray = ['/snap/node/7392/bin/node', '/pathOfFile', "BLABLA", "TRALALA"];
  const expectedResult = {
    inputArray: ['BLABLA'],
    comparator: 'TRALALA'
  };
  const result = getArgsAndComparator(argsArray)
  assert.deepStrictEqual(result, expectedResult);
}
function testSanitaryPass(){
  const inputArray = ["Michel","Albert","Thérèse","Benoit"];
  const comparator = "t";
  const expectedResult = ["Michel"];
  const result = sanitaryPass(inputArray, comparator);
  assert.deepStrictEqual(result, expectedResult);
}
/**
 * AIR06 TESTS
 */
function testSortedInsert() {
  const inputArray = [1, 3, 4, 7];
  const newElement = 5;
  const expectedResult = [1, 3, 4, 5, 7];
  const argsArray = ['node', 'path/to/file.js', ...inputArray.map(String), String(newElement)];

  const result = sortedInsert(argsArray);
  assert.deepStrictEqual(result, expectedResult);
}

setShowErrorMessage(false);
let countSuccess = 0;
let totalCount = 0;

function runTests() {
    runTest(testSplitString,'air00 (1/1)');
    runTest(testSplitStringWithStringSeparator, "air01 (1/1)");
    runTest(testFindIntruders, 'air02 (1/1)');
    runTest(testCutSameCharInString, 'air03 (1/1)');
    runTest(testAddOrSous, 'air04 (1/3)');
    runTest(testGetArgumentsIntoIntegerArray, 'air04 (2/3)');
    runTest(testMinArgsCountCheck, 'air04 (3/3)');
    runTest(testFindStringInString,'air05 (1/3)');
    runTest(testGetArgsAndComparator,'air05 (2/3)');
    runTest(testSanitaryPass,'air05 (3/3)');
    runTest(testSortedInsert, 'air06 (1/1)');
    console.log(countSuccess + "/" + totalCount);
}

function runTest(testFunction, testName){
  totalCount++;
  try{
  testFunction();
  countSuccess++;
  console.log(testName, "\x1b[32m", 'success', '\x1b[0m');
  }catch (error){
    if (error instanceof assert.AssertionError) {
      console.error(testName, "\x1b[31m", 'failed','\x1b[0m' + error.message);
    } else {
      console.error('Test failed:', error.message);
    }
  }
}

runTests();