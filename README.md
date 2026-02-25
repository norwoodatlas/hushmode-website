# Hush Mode Website

Simple static marketing/legal site for Vercel.

## Files

- `index.html`: home page with App Store call-to-action
- `privacy.html`: privacy policy
- `terms.html`: terms and conditions
- `styles.css`: shared styling
- `config.js`: single place to set App Store URL

## Update App Store URL

1. Open `website/config.js`.
2. Replace:
   - `https://apps.apple.com/us/app/id0000000000`
3. Save and redeploy.

## Vercel Setup

This repo includes root `vercel.json` rewrites so these routes work directly:

- `/`
- `/privacy`
- `/terms`

