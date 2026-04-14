# Frontend

This app handles the public site and the login flow.

## What was fixed for Holdings

The login flow now stores the issued auth token in both `localStorage` and a shared cookie. That matters because the dashboard runs on a different port, so `localStorage` alone was not enough for the Holdings page to detect that the user had already logged in.

The frontend now:

- saves the JWT token after login
- shares the token with the dashboard through a cookie fallback
- opens the dashboard after a successful login

## Run

```bash
npm start
```

The app runs at `http://localhost:3000`.

