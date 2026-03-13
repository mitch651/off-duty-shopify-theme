# Off Duty Theme – Deployment Checklist

## ✅ Pre-deployment audit complete

### Required files
- [x] `layout/theme.liquid` – Base layout
- [x] `config/settings_schema.json` – Theme settings
- [x] `config/settings_data.json` – Default values
- [x] `assets/theme.css` – Styles
- [x] `assets/theme.js` – Header scroll, mobile menu
- [x] `locales/en.default.json` – Translations

### Templates
- [x] `templates/index.json` – Homepage
- [x] `templates/collection.json` – Collection listing
- [x] `templates/product.json` – Product page
- [x] `templates/page.json` – Standard pages
- [x] `templates/page.lookbook.json` – Lookbook template
- [x] `templates/page.help.json` – Help template
- [x] `templates/cart.json` – Cart
- [x] `templates/search.json` – Search
- [x] `templates/404.json` – Not found

### Sections
- [x] Announcement bar, Header, Footer (layout)
- [x] Hero, Editorial, Featured collection, Newsletter (homepage)
- [x] Main product, Main collection
- [x] Main cart, Main search, Main 404, Main page

### Fixes applied
- [x] Font handling – Safe guards for `font_face` (no Liquid errors)
- [x] Header – Sticky + blur, opacity controls work
- [x] Empty menus – Header/footer handle unassigned menus
- [x] Hero – Fallback when no background image
- [x] Product – Placeholder when product has no images
- [x] Cart – Correct `updates[item.key]` for cart quantity updates; separate Checkout link
- [x] Footer – Use `section.settings.menu.links` (not `linklists[]`) for footer menus
- [x] Newsletter – `contact[tags]` value "newsletter" for proper signup
- [x] Product card – Placeholder when product has no featured image
- [x] Product color swatches – Hex code support (#000000 or 000000)
- [x] Product variant images – Null check and `src`/`url` fallback in JS
- [x] Editorial – Default link when none set
- [x] Font – Switched default from Inter to Work Sans; added Okay font option

### Before going live
1. Create navigation menus in **Online Store → Navigation** (main-menu, footer menus)
2. Assign menus in **Customize → Header** and **Customize → Footer**
3. Add at least one collection for the homepage Featured collection
4. Add products and collection images
5. Set hero background image in **Customize → Homepage → Hero**

### Zip & upload
Zip the theme folder (ensure `assets`, `config`, etc. are at the root of the zip) and upload via **Online Store → Themes → Add theme → Upload zip file**.
