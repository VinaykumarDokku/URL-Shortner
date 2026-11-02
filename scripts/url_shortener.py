"""Generate and resolve short URL codes."""

import secrets
import string
from urllib.parse import urlparse


class URLShortener:
    def __init__(self):
        self.urls = {}
        self.alphabet = string.ascii_letters + string.digits

    def validate_url(self, url):
        parsed = urlparse(url)

        return (
            parsed.scheme in ("http", "https")
            and bool(parsed.hostname)
            and not any(char.isspace() for char in url)
        )

    def shorten(self, original_url):
        if not self.validate_url(original_url):
            raise ValueError("Invalid URL. Use http:// or https://")

        for _ in range(10):
            code = "".join(
                secrets.choice(self.alphabet)
                for _ in range(7)
            )

            if code not in self.urls:
                self.urls[code] = original_url
                return code

        raise RuntimeError("Unable to generate unique URL code")

    def resolve(self, code):
        return self.urls.get(code)


if __name__ == "__main__":
    shortener = URLShortener()

    original = "https://github.com/VinaykumarDokku"

    code = shortener.shorten(original)

    print("Original URL:", original)
    print("Short Code:", code)
    print("Resolved URL:", shortener.resolve(code))
