## 🚀 Link Shortener Project

A simple URL shortener application built using **Express.js**, **EJS**, and **MongoDB**.
It allows users to:

* Generate short unique links for long URLs
* Track the number of clicks
* View click history

---

### ✅ Features

* **URL Shortening**: Generates unique 8-character `shortId` for submitted URLs.
* **URL Redirection**: Redirects from `/:shortId` to the original URL.
* **Click Analytics**: Stores timestamp of each visit.
* **RESTful API**: Endpoint for creating short URLs.
* **Dynamic Views**: Uses EJS to render pages with original and short URLs.

---

### 🧱 Technologies Used

* **Node.js** – Server-side runtime
* **Express.js** – Web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB ORM
* **EJS** – Templating engine
* **nanoid** – Generates unique short IDs
* **Nodemon** – Auto-restarts server on file changes

---

### ⚡ Getting Started

#### Prerequisites

* Node.js installed
* MongoDB running

#### Installation

```bash
git clone <repository-url>
cd link-shortner-project
npm install
```

#### Configuration

* Database connection string is in `index.js`:

  ```js
  connectDataBase('mongodb://localhost:27017/makingUrlShortner')
  ```
* Modify this URI if needed.

#### Run the Application

```bash
npm start
```

* Access it at `http://localhost:3000`.

---

### 🗂️ Project Structure

* **index.js** – Main server setup, database connection, route definitions.
* **routes/url.js** – Handles API for URL shortening.
* **routes/staticRouter.js** – Renders EJS pages.
* **models/url.js** – URL schema with `shortId`, `redirectUrl`, and visit history.
* **views/** – EJS template files.
* **package.json** – Dependencies and project metadata.

---

### ⚙️ API Endpoints

#### POST `/url`

Creates a new short URL.
**Request Body Example:**

```json
{
  "url": "https://www.example.com"
}
```

#### GET `/:shortId`

* Redirects to the original URL
* Logs the visit timestamp

---
