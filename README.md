Dorcas Anthony - Luxury Portfolio (React + Vite)
===============================================

What’s included
- React project structure (Vite) ready to paste into a Vite React project.
- Components with separate CSS files (Loader, Navbar, Hero, About, Skills, Projects, Testimonials, ContactForm, Footer).
- Images extracted from frames.zip are placed in src/assets/ (keep original filenames).
- React Router configured for multi-page navigation.
- Loader shows every time on page load (per your choice).
- Contact form submits JSON POST to an endpoint: replace the placeholder with your Formspree/Email endpoint.

How to use
1. Create a Vite React project if you haven't:
   npm create vite@latest dorcas-portfolio -- --template react
   cd dorcas-portfolio
2. Copy the contents of this zip's `src` folder into your project's `src/`.
3. Install dependencies:
   npm install
   npm install react-router-dom
4. Add your contact endpoint: create a .env file with REACT_APP_CONTACT_ENDPOINT=https://formspree.io/f/your-id
5. Start dev server:
   npm run dev

Contact form
- The form will POST JSON to the endpoint in REACT_APP_CONTACT_ENDPOINT.
- You can use Formspree, Netlify forms, or a custom backend.

Notes
- Replace demo image imports with your preferred assets or change filenames if needed.
- Make sure to optimize images for production (convert to webp).
