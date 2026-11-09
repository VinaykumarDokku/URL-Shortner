const net = require('node:net');

function isValidUrl(value) {
  if (typeof value !== 'string') return false;

  try {
    const url = new URL(value);

    if (!['http:', 'https:'].includes(url.protocol)) {
      return false;
    }

    if (!url.hostname || url.username || url.password) {
      return false;
    }

    const hostname = url.hostname.replace(/^\[|\]$/g, '').toLowerCase();

    if (hostname === 'localhost' ||
        hostname.endsWith('.localhost') ||
        hostname.endsWith('.local') ||
        hostname.endsWith('.internal')) {
      return false;
    }

    if (net.isIP(hostname)) {
      return false;
    }

    return hostname.includes('.');
  } catch {
    return false;
  }
}

module.exports = { isValidUrl };
