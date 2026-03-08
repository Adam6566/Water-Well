# City of Forest – Water Well Management App

A mobile-friendly Progressive Web App (PWA) for the City of Forest, Mississippi to track water well runtime, meter readings, gallons, and maintenance notes.

## Features

- **6 Well Locations**: Wal-Mart Well, Trenton Rd Well, Cedar Street Well, RG Well, Oak Park Well, Hwy 80 Well
- **Runtime & Meter Tracking**: Log run hours, start/end meter readings; gallons through meter calculated automatically
- **Time-Period Filtering**: Filter records by 1, 3, 6, or 12 months
- **Maintenance Notes**: Per-well maintenance log with timestamps
- **General Notes**: City-wide maintenance notes screen
- **CSV Export**: Export runtime data (by period), maintenance notes, or a full all-wells report
- **All data timestamped** automatically on entry
- **Works offline** – all data stored locally in the browser

## How to Use

### Option A – GitHub Pages (Recommended)
1. Fork or clone this repo
2. Go to **Settings → Pages** → set source to `main` branch, root `/`
3. Your app will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
4. On your phone, open that URL in Chrome (Android) or Safari (iPhone) → tap **"Add to Home Screen"** to install as an app

### Option B – Run Locally
Just open `index.html` in any modern browser. No server or install needed.

## File Structure

```
index.html      ← The entire app (single file)
manifest.json   ← PWA manifest for "Add to Home Screen"
README.md       ← This file
```

## Data Storage

All data is stored in your browser's **localStorage** — it stays on the device and never leaves. To back up data, use the **Export** tab inside each well to download CSVs.

## Export Formats

| Export | Contents |
|--------|----------|
| Runtime CSV | Date, run hours, start meter, end meter, gallons, notes |
| Maintenance CSV | Date and maintenance note per well |
| Full Report CSV | All wells, all types, sorted by date |
| General Notes CSV | All general maintenance notes |

## City of Forest, MS
Public Works / Water Department
