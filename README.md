# wedding

A static wedding invitation with a separate RSVP form.

Run `python3 -m http.server 8000 --directory public` and open
`http://localhost:8000/` to preview the pages. The local server serves the
pages only. RSVP submission requires Netlify.

Netlify publishes `public/` using the checked-in `netlify.toml`. Enable
form detection in the project’s Forms dashboard, redeploy, and check that
a test RSVP appears under **wedding-rsvp** before sharing the site.
