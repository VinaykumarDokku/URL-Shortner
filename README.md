# 🔗 URL Shortner

### A URL Shortening Web Application Built with Node.js, Express.js, and Firebase

A web-based URL shortening application that allows administrators to create short links and redirect visitors to their original destinations.

Built using **Node.js, Express.js, and Firebase Cloud Firestore**, the project demonstrates backend API development, database integration, HTTP redirection, and static frontend hosting.

## 📌 Project Overview

URL Shortner is a web application designed to simplify long website links into shorter, easier-to-share URLs.

The application stores short URL mappings in Firebase Firestore and uses an Express.js server to handle link redirection and administrative operations.

**GitHub Repository:** https://github.com/VinaykumarDokku/URL-Shortner

## 🚀 Features

- **URL Shortening:** Create custom short URL mappings for longer web addresses.
- **Automatic Redirection:** Redirect visitors from short links to their original URLs.
- **Firebase Integration:** Store URL mappings in Cloud Firestore.
- **Admin API:** Create URL mappings through an administrative endpoint.
- **Credential Validation:** Check submitted administrator credentials against stored user records.
- **Static Frontend:** Serve website assets using Express.js.
- **REST-style Backend:** Handle HTTP GET and POST requests.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Application development |
| Node.js | Server-side runtime |
| Express.js | Web server and HTTP routing |
| Firebase Admin SDK | Firebase service integration |
| Cloud Firestore | URL and administrator data storage |
| Body Parser | JSON request processing |
| HTML/CSS/JavaScript | Frontend web interface |

## 📂 Project Structure

```text
URL-Shortner/
│
├── public/                 # Static frontend files
├── scripts/                # Project scripts
├── index.js                # Express server and API routes
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lockfile
├── .gitignore              # Git exclusion rules
├── ss.png                  # Project screenshot
└── README.md               # Project documentation
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/VinaykumarDokku/URL-Shortner.git
```

### 2. Navigate to the project

```bash
cd URL-Shortner
```

### 3. Install dependencies

Make sure Node.js and npm are installed.

```bash
npm install
```

### 4. Configure Firebase

This application requires a Firebase project with Cloud Firestore enabled.

1. Create or select a project in the Firebase Console.
2. Enable Cloud Firestore.
3. Generate a Firebase Admin SDK service-account key.
4. Save the downloaded JSON file using the filename expected by `index.js`, or update `index.js` to reference the local filename.
5. Keep the credentials file outside version control.

**Security:** Never upload Firebase service-account keys to a public GitHub repository.

Add the following pattern to `.gitignore`:

```gitignore
*-firebase-adminsdk-*.json
```

The application currently uses the Firestore collections `urlsdb` for URL mappings and `usersdb` for administrator records.

### 5. Start the application

```bash
node index.js
```

The application runs at:

```text
http://localhost:3000
```

## 🔌 API Endpoints

### 1. Redirect to the Original URL

**Method:** `GET`

**Endpoint:**

```http
GET /:short_url
```

Example:

```text
http://localhost:3000/my-link
```

The application looks up `my-link` in Firestore and redirects to the stored destination URL when a mapping exists.

### 2. Create a Short URL

**Method:** `POST`

**Endpoint:**

```http
POST /admin/urls/
```

**Example request:**

```json
{
  "email": "admin@example.com",
  "password": "your-password",
  "short_url": "my-link",
  "url": "https://example.com"
}
```

**Example success response:**

```json
{
  "statusCode": 201,
  "message": "Done"
}
```

**Example rejected response:**

```json
{
  "statusCode": 403,
  "message": "Not Possible"
}
```

The current implementation returns these status codes inside JSON response bodies.

## 🔄 Application Workflow

```text
Administrator
     |
     v
Submit Original URL + Short Code
     |
     v
Express.js Admin Endpoint
     |
     v
Validate Administrator Credentials
     |
     v
Save URL Mapping in Firestore
     |
     v
Visitor Opens Short URL
     |
     v
Express.js Retrieves Destination
     |
     v
HTTP Redirect to Original Website
```

## 🔐 Security Considerations

This repository is suitable as a learning project, but several improvements are recommended before public deployment:

- Store passwords using secure hashing rather than plaintext comparison.
- Replace request-body passwords with a secure authentication mechanism.
- Validate destination URLs to reduce malicious-link abuse.
- Add rate limiting to administrative endpoints.
- Return appropriate HTTP error status codes.
- Keep Firebase service-account credentials private.
- Add error handling for Firestore connection failures.

## 📈 Future Enhancements

- Generate random short codes automatically.
- Support custom URL aliases.
- Add link expiration dates.
- Track click counts and link analytics.
- Create a secure administrator dashboard.
- Implement Firebase Authentication.
- Add automated API tests.
- Deploy the application to a cloud hosting platform.

## 👨‍💻 Author

**Vinay Kumar Dokku**

**GitHub:** https://github.com/VinaykumarDokku

**Portfolio:** https://vinaykumardokku.github.io/

**Repository:** https://github.com/VinaykumarDokku/URL-Shortner

---

⭐ If you find this project useful, consider starring the repository.
