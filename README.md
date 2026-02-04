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

## License & Rights

### Code
The source code for this project (HTML, CSS, Python, Dockerfile) is licensed under the **Apache License 2.0**. You are free to fork, modify, and use the code for your own portfolio.

### Creative Assets
**Copyright © 2026 Margaret Maynard-Reid.**

The creative assets in this repository, including but not limited to:
* The `/assets/` directory
* All fashion sketches and 3D renders
* The "Century of Style" imagery
* Personal profile photos

Are **NOT** covered by the Apache License. They are shared under **Creative Commons BY-NC-ND 4.0** (Attribution-NonCommercial-NoDerivs). You may view and share them for educational purposes with credit, but you may not use them commercially or modify them without permission.
