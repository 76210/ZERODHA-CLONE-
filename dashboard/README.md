# Dashboard

This app renders the trading dashboard, including the Holdings page.

## What was fixed for Holdings

The Holdings page was previously checking only the dashboard app's own `localStorage`, which did not contain the token created during login on the frontend app. That caused the false "Please login first" popup.

The dashboard now:

- reads the token from `localStorage` or the shared cookie fallback
- copies the cookie token back into `localStorage` when needed
- sends the token as `Bearer <token>` to the Holdings API
- sends users back to the frontend login page when the session is missing or expired

## Run

```bash
PORT=3001 npm start
```

The dashboard runs at `http://localhost:3001`.

