# Portfolio Repository

This repository contains Margaret Maynard-Reid's fashion design and engineering projects. It is organized into sub-projects for better scalability.

## Projects

- [**web-ui**](web-ui/): The main portfolio website (React + Tailwind + Cloud Run).
- **backend** (Future): Upcoming backend services.

## Development

To work on a specific project, navigate to its directory:

```bash
cd web-ui
npm install
npm run dev
```

## Deployment

Projects are deployed independently. For the web-ui:

```bash
cd web-ui
gcloud run deploy web-ui --source .
```
