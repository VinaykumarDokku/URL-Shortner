const test = require('node:test');
const assert = require('node:assert/strict');

test('valid HTTPS URL', () => {
  const url = new URL('https://github.com');
  assert.equal(url.protocol, 'https:');
});

test('valid HTTP URL', () => {
  const url = new URL('http://example.com');
  assert.equal(url.protocol, 'http:');
});
