
# Shehroze Portfolio (Next.js)

Dynamic portfolio (Next.js App Router) with API routes.

## One-click (no local setup)
1. Zip this folder.
2. Go to https://vercel.com/new → "Add New… → Project" → **Import Project** → **Upload**.
3. Upload the ZIP. Vercel will detect Next.js and deploy.
4. After deploy, set `NEXT_PUBLIC_BASE_URL` in Project → Settings → Environment Variables to your site URL (e.g., https://your-site.vercel.app). Redeploy.

## API
- `GET /api/projects` — returns JSON for projects shown on the page.
- `POST /api/contact` — stub endpoint. Integrate with Resend/SendGrid or a DB.

## Dev (optional)
If you ever want to run locally:
```bash
npm i
npm run dev
```

