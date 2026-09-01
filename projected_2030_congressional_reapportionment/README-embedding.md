# Embedding this map

Live URL: https://zhangj-brennan.github.io/midterms/projected_2030_congressional_reapportionment/index.html

Use this snippet wherever the map is embedded (currently: the Drupal site).
See `geo_to_carto_template/README-embedding.md` in the repo root for why a
plain fixed `height` doesn't work and how these numbers were measured.

```html
<style>
  .reapportionment-map { height: 760px; }
  @media (max-width: 800px) { .reapportionment-map { height: 750px; } }
  @media (max-width: 700px) { .reapportionment-map { height: 680px; } }
  @media (max-width: 600px) { .reapportionment-map { height: 620px; } }
  @media (max-width: 500px) { .reapportionment-map { height: 590px; } }
  @media (max-width: 400px) { .reapportionment-map { height: 560px; } }
</style>
<p>
    <iframe class="reapportionment-map" style="border:0;display:block;width:100%;" src="https://zhangj-brennan.github.io/midterms/projected_2030_congressional_reapportionment/index.html" width="100%" frameborder="0" scrolling="no" title="Embedded content"></iframe>
</p>
```

## Notes

- The 560px/590px tiers are close to the actual measured content height
  (~545px at 360px wide, ~610px at 600px wide) — only ~15–30px of margin.
  If you ever add content to the page (e.g. a longer footnote), re-measure
  and bump these up, or you risk clipping instead of extra whitespace.
- Requires a text format that doesn't strip `<style>` tags (Drupal's "Full
  HTML", not a restricted format) — confirmed working as of 2026-08-26.
- If it still looks too tall after this, check for padding/margin coming
  from the Drupal theme around the embed block itself, not the iframe.
