# Movie Display Web

A React-based web app to search, browse, and favorite movies using the TMDB API.

## Features

- Search for movies by title
- Browse popular movies
- Add/remove movies to your favorites
- Responsive UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd Movie-Display-Web/frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**

   - Create a `.env` file in the `frontend` directory:
     ```
     VITE_TMDB_API_KEY=your_tmdb_api_key_here
     ```

   - **Do not share your API key publicly.**

4. **Start the development server:**
   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Deployment

You can deploy the `dist` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).  
Make sure to set the `VITE_TMDB_API_KEY` environment variable in your deployment settings.

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── css/
│   ├── pages/
│   └── services/
├── .env
├── .gitignore
├── package.json
└── vite.config.js
```

## License

MIT

---

**Made with ❤️ using React and Vite**