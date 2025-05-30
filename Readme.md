# 🚀 Node Express TypeScript MongoDB API

A modular backend API boilerplate using:

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB (via `mongoose`)**
- **Multer** for file uploads
- **CORS**
- **Dotenv**
- **Nodemon + ts-node-dev** for dev workflow

---

## 📁 Folder Structure

```

project-root/
│
├── src/
│   ├── config/          # DB and app configs
│   ├── controllers/     # Business logic
│   ├── middleware/      # CORS, file upload, error handlers
│   ├── models/          # DB queries and interfaces
│   ├── routes/          # Route definitions
│   ├── uploads/         # Multer-uploaded files
│   ├── utils/           # Helper functions
│   ├── server.ts        # Entry point
│
├── .env                 # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md

```

---

### 🐧 Linux / 🖥️ WSL / 💻 MacOS

#### Download using curl

```bash
curl -L -o setup_node_express_ts_pg.sh https://raw.githubusercontent.com/celebrity4000/node-express-ts-pg/main/setup.sh
```

#### Or using wget

```bash
wget https://raw.githubusercontent.com/celebrity4000/node-express-ts-pg/main/setup.sh -O setup_node_express_ts_pg.sh
```

#### Make the script executable and run it

```bash
chmod +x setup_node_express_ts_pg.sh
./setup_node_express_ts_pg.sh
```

---

### 🪟 Git Bash (on Windows)

#### Download using curl

```bash
curl -L -o setup_node_express_ts_pg.sh https://raw.githubusercontent.com/celebrity4000/node-express-ts-pg/main/setup.sh
```

#### Make the script executable

```bash
chmod +x setup_node_express_ts_pg.sh
```

#### Run the script

```bash
./setup_node_express_ts_pg.sh
```

---

## ⚙️ Environment Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGODB_URL=
DB_NAME=
```

### 4. Start the server

```bash
npm run dev
```

Runs the app with `nodemon` + `ts-node`.

---

## 🚦 API Endpoints

Base URL: `http://localhost:5000/api`

### 🔹 Health Check

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | `/health`       | Server + DB status   |

---

## 🧩 Features

- Modular folder structure
- PostgreSQL connection with SSL support
- Type safety with TypeScript
- File upload support with `multer`
- CORS enabled for all origins
- Custom error handling middleware
- Auto reload using `nodemon`

---

## 📦 Scripts

```bash
npm run dev       # start with nodemon
npm run build     # compile TypeScript
npm run start     # run compiled JS (dist/)
```

---

## 📤 Uploading Files (Example)

- Endpoint: `POST /api/upload`
- Form field name: `file`
- Multer will save files in `/uploads`

---

## 📚 Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB
- mongoose (node-mongoose)
- multer
- dotenv
- cors
- nodemon
