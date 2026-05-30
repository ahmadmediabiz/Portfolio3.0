# Portfolio Site Notes

## Media Kit nav link

The Media Kit page still exists at `media-kit.html`, but it is currently hidden from the top navigation.

To reinsert it, add this link to the `<nav class="site-nav">` block in every `.html` page, placing it between the TikTok and About Me links:

```html
<a href="media-kit.html">Media Kit</a>
```

On `media-kit.html` itself, use the current-page version instead:

```html
<a href="media-kit.html" aria-current="page">Media Kit</a>
```

To remove it again, delete that Media Kit `<a>` line from each page's nav.
