# Cloudflare Pages deploy

This site is ready to publish as a static Cloudflare Pages project.

## Recommended settings

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: the repository root

## Option 1: Upload directly

1. Open your Cloudflare Pages project.
2. Choose the option to deploy from local files if available.
3. Upload the contents of this folder, not a parent folder above it.
4. Confirm that `index.html` is in the site root after upload.

## Option 2: Connect GitHub

1. Push the updated files back to your GitHub repository.
2. In Cloudflare Pages, connect the GitHub repository.
3. Set the root directory to the repository root if needed.
4. Leave the build command blank.
5. Set the output directory to `/`.
6. Trigger a deployment.

## Files included in this update

- `index.html`
- `work.html`
- `assets/work/` project screenshots
- existing images and video assets
- `_headers` for basic security and caching rules

## Before going live

- Check the homepage portfolio section.
- Check the `Work` page.
- Check that project screenshots load.
- Check the quote form.
- Check the custom domain still points to the correct Pages project.

## Suggested next release after this

- improve package pricing clarity
- add FAQ section
- add real testimonials when available
