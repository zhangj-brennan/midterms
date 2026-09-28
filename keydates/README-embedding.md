# Embedding the key dates map

Live URL: https://zhangj-brennan.github.io/midterms/keydates/map.html

Use this snippet wherever the map is embedded (the Drupal site).

```html
<p>
    <iframe style="border:0;display:block;width:100%;height:780px;" src="https://zhangj-brennan.github.io/midterms/keydates/map.html" width="100%" height="780" frameborder="0" scrolling="no" title="Key 2026 election dates by state"></iframe>
</p>
```

## Notes

- The page's height changes day to day: the "Today" and "Up next" legend lists
  get longer on busy days. Measured on 2026-09-28 across every day from
  September 28 through November 3, the tallest the page gets is 750–762px at
  every width from 360px to 1000px (the tallest day is November 2). 780px leaves
  about 20px of margin, so one fixed height works at all widths; no media
  queries needed, unlike the reapportionment map.
- If you add content to the page (e.g. a longer footnote or more legend lines),
  re-measure and raise the height, or the bottom will be clipped.
- The height is inline on the iframe, so it works in a Drupal text format that
  strips `<style>` tags as long as it keeps the `style` attribute. If the
  format strips that too, the `height="780"` attribute is the fallback.
