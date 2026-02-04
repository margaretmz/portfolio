# Portfolio website

This is a React-based portfolio website showcasing my AI, art, and design projects. The design aesthetic is editorial / minimalist luxury to reflect my background in both fashion design and engineering.

## Tech Stack

- **Framework:** React 19 (via ESM)
- **Styling:** Tailwind CSS
- **Icons:** Material Symbols
- **AI tools:** Stitch, Google AI Studio & Antigravity
- **Deployment:** Express.js server (Cloud Run ready)

## Project Architecture

The repository is organized into main architectural sections to support scalability:

- [**web-ui/**](web-ui/): The core frontend application and production server.
    - `assets/`: Image assets for projects.
    - `components/`: React components for UI.
    - `services/`: API and AI services.
    - `constants.ts`: Project data and configuration.
    - `App.tsx`: Main application logic and view switching.
- **backend/** (Future): Data services and backend processing.

## Development

To run the web interface locally:

```bash
cd web-ui
npm install
npm run dev
```

## Deployment

To deploy the web interface to Cloud Run:

```bash
cd web-ui
gcloud run deploy web-ui --source .
```
