# Off Duty Shopify Theme

Custom Shopify theme for Off Duty (offduty.us).

## Push to GitHub

1. Create a new repo at [github.com/new](https://github.com/new) (e.g. `off-duty-shopify-theme`)
2. Run:

```bash
cd off-duty-shopify-theme
git remote add origin https://github.com/YOUR_USERNAME/off-duty-shopify-theme.git
git branch -M main
git push -u origin main
```

## Automatic Updates (choose one)

### Option A: Shopify GitHub integration (simplest)

1. Shopify Admin → **Online Store** → **Themes**
2. **Add theme** → **Connect from GitHub**
3. Authorize and select your repo
4. Choose branch (main) and connect
5. Pushing to GitHub will sync changes to Shopify automatically

### Option B: GitHub Actions

1. Add secret: Repo **Settings** → **Secrets** → **SHOPIFY_CLI_THEME_TOKEN**
2. Get token: `shopify auth token --store offdutyus.myshopify.com`
3. Pushing to `main` triggers deploy

## Manual deploy

```bash
shopify theme push --theme 176320872612 --allow-live --nodelete
```

## Development

- **Theme ID:** 176320872612
- **Store:** offduty.us
