# Off Duty Theme - Implementation Summary

## Root Problems Found

1. **Page template sharing** – About and Lookbook could share the default page template, causing sections added to one page to appear on the other.
2. **Lookbook duplicate** – Menu label "Lookbook" plus page heading "Lookbook" felt like duplication; no editable page heading.
3. **Product card** – No sold-out state (badge or strikethrough).
4. **Variant colors** – All option values shown, including sold-out variants.
5. **No favicon** – Missing from theme settings and layout.
6. **Flat collection sidebar** – No collapsible categories (T-Shirts, Hoodies, Sweatpants).
7. **No swipe/carousel** – Product thumbs and cards were not swipeable on mobile.
8. **Dead code** – `main-index.liquid` unused.
9. **Hardcoded headings** – Page and Lookbook headings not editable.

---

## What Was Repaired

### Part 2 – Page Section Duplication
- Added `templates/page.about.json` – independent About template
- Added `templates/page.brand-ambassador.json` – Brand Ambassador template
- Each page type now has its own section structure

### Part 3 – Header / Menu
- `off-duty-lookbook.liquid`: `show_heading` checkbox and editable `heading` (default "As Seen On")
- `page.lookbook.json`: default heading set to "As Seen On"
- Duplicate "Lookbook": fix in Shopify Admin (remove duplicate from Navigation, rename link to "As Seen On")

### Part 4 – Lookbook / As Seen On
- Editable heading with show/hide
- Default heading: "As Seen On"

### Part 5 – Catalog Sidebar
- Category blocks in `main-collection.liquid` (heading + collection)
- Mobile toggle for collapsible sidebar
- Fallback to `sidebar_menu` link list when no blocks
- Preset: T-Shirts, Hoodies, Sweatpants (collections to be assigned in theme editor)

### Part 6 – Sold-Out Products
- Product card: `is-sold-out` class, Sold Out badge, strikethrough title
- Styling in `theme.css`

### Part 7 – Variant Color Logic
- Color (and other) options show only values with at least one available variant
- Sold-out variants excluded from swatches

### Part 8 – Swipe / Carousels
- Product page thumbs: horizontal scroll with `scroll-snap`, touch swipe
- Product cards with multiple images: swipeable carousel with CSS scroll-snap

### Part 9 – Favicon
- `settings_schema.json`: Favicon image picker
- `theme.liquid`: favicon link in `<head>`

### Part 10 – Brand Ambassador Page
- `sections/off-duty-brand-ambassador.liquid` – contact form (Full Name, Email, Social Media, Message)
- Uses Shopify contact form; submissions appear in Shopify Admin
- Theme-editor settings for labels, placeholders, button text, success message

### Part 13 – Dead Code
- Removed `sections/main-index.liquid` (unused)

---

## Files Created

- `templates/page.about.json`
- `templates/page.brand-ambassador.json`
- `sections/off-duty-brand-ambassador.liquid`
- `IMPLEMENTATION_SUMMARY.md` (this file)

---

## Files Modified

- `templates/page.lookbook.json` – heading "As Seen On", `show_heading`
- `templates/collection.json` – sidebar category blocks (T-Shirts, Hoodies, Sweatpants)
- `sections/off-duty-lookbook.liquid` – `show_heading`, heading default "As Seen On"
- `sections/off-duty-page.liquid` – `show_heading`, optional heading override
- `sections/main-collection.liquid` – category blocks, mobile sidebar toggle
- `sections/main-product.liquid` – only show available variant options
- `snippets/product-card.liquid` – sold-out state, multi-image carousel
- `layout/theme.liquid` – favicon link
- `config/settings_schema.json` – favicon setting
- `assets/theme.css` – sold-out, sidebar, product carousel, scroll-snap
- `assets/theme.js` – collection sidebar toggle

---

## Files Deleted

- `sections/main-index.liquid`

---

## Shopify Admin Steps

### 1. Navigation
1. Go to **Online Store > Navigation > Main menu**.
2. Remove duplicate "Lookbook" if it appears twice.
3. Rename "Lookbook" to **As Seen On**.
4. Add the Brand Ambassador page to the menu (after creating it below).

### 2. Pages and Templates
1. **About** – Assign template **about** (Online Store > Pages > About > Theme template).
2. **As Seen On / Lookbook** – Assign template **lookbook** (same way).
3. **Brand Ambassador** – Create a new page, assign template **brand-ambassador**, add to navigation.

### 3. Theme Settings
1. Go to **Online Store > Themes > Customize > Theme settings**.
2. In **Favicon**, upload your favicon image (32×32 px recommended).

### 4. Collections Sidebar
1. Create collections: T-Shirts, Hoodies, Sweatpants (or your categories).
2. Go to **Customize** and open a collection page.
3. Open the Collection section and assign a collection to each category block (T-Shirts, Hoodies, Sweatpants).
4. Or use **Collections menu (fallback)** and assign a Navigation menu with collection links.

### 5. Brand Ambassador Form
- Submissions appear in **Shopify Admin > Customers > View contacts** or via contact/notification settings.
- The form uses the contact tag `brand-ambassador` for filtering.

---

## Notes

- Menu labels come from Shopify Navigation; the theme shows whatever is set there.
- Page independence comes from assigning the correct template to each page.
- App blocks are supported; templates use standard JSON and `content_for_layout`.
- Social Media is stored in the contact “Phone” field; adjust your contact notification template if needed.
