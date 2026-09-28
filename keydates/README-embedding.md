# Embedding the key dates map

Live URL: https://zhangj-brennan.github.io/midterms/keydates/map.html

Use this snippet wherever the map is embedded (the Drupal site). It needs a text format that keeps
`<script>` tags (Drupal's "Full HTML").

```html
<p>
    <iframe id="keydates-map" style="border:0;display:block;width:100%;height:780px;" src="https://zhangj-brennan.github.io/midterms/keydates/map.html" width="100%" height="780" frameborder="0" scrolling="no" title="Key 2026 election dates by state"></iframe>
</p>
<script>
  // Resize the map's iframe to fit its content; map.html sends its height whenever it changes.
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://zhangj-brennan.github.io" || !e.data || e.data.type !== "keydates-map-height") return;
    var frame = document.getElementById("keydates-map");
    if (frame && e.source === frame.contentWindow) frame.style.height = e.data.height + "px";
  });
</script>
```

## Notes

- **Why it resizes itself.** The page's height changes day to day: the "Today" and "Up next" legend
  lists get longer on busy days. Measured on 2026-09-28 across September 28 – November 4, the page is
  about 500–750px tall at 1000px wide (e.g. ~610px on Sep 28, ~720px on Oct 19, ~750px on Nov 2) and
  about 460–740px at 360px wide. A single fixed height either leaves a gap on quiet days or clips
  busy ones, so `map.html` posts its content height to the parent page (`postMessage`, message type
  `keydates-map-height`) on load and whenever its content resizes, and the script above applies it.
- **Fallback.** If the `<script>` is stripped (a restricted text format), the iframe keeps its fixed
  780px height, which fits the tallest day with a small gap on quieter days: the same as the
  previous embed. View the published page's source and search for `keydates-map-height` to confirm
  the script survived.
- **One map per page.** The script looks up the iframe by `id="keydates-map"`. To embed the map twice
  on one page, give the second iframe a different id and duplicate the script with that id.
- The script only accepts messages from `https://zhangj-brennan.github.io` and only from this iframe.
  If the map moves to another host, update the origin in the snippet.
- If there's still extra space after the script is confirmed present, it's probably padding or margin
  from the Drupal theme around the embed block, not the iframe.
