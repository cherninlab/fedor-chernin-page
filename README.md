# fedor-chernin-page

## Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Getting Started

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run analyze` - Analyze bundle size
- `npm run knip` - Find unused exports/dependencies

### Deployment

The project is automatically deployed to Cloudflare Pages on push to main branch.

## Code Style

Key conventions:

- Function components with TypeScript
- CSS Modules for styling
- Explicit return types
- Proper semantic HTML
