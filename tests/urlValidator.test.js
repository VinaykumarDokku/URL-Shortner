const test = require('node:test');
const assert = require('node:assert/strict');

const { isValidUrl } = require('../utils/urlValidator');

test('accepts valid HTTPS URL', () => {
  assert.equal(isValidUrl('https://github.com'), true);
});

test('accepts valid HTTP URL', () => {
  assert.equal(isValidUrl('http://example.com/page'), true);
});

test('rejects invalid URL', () => {
  assert.equal(isValidUrl('not-a-url'), false);
});

test('rejects JavaScript URLs', () => {
  assert.equal(isValidUrl('javascript:alert(1)'), false);
});

test('rejects localhost', () => {
  assert.equal(isValidUrl('http://localhost:3000'), false);
});

test('rejects direct IP addresses', () => {
  assert.equal(isValidUrl('http://127.0.0.1'), false);
});

test('rejects embedded credentials', () => {
  assert.equal(isValidUrl('https://user:pass@example.com'), false);
});
