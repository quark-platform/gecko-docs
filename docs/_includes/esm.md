---
layout: esm.liquid
---

<h1 class="subtitled">{{ page.fileSlug }}.sys.mjs</h1>
<div>Path: <a href="https://searchfox.org/mozilla-central/source/{{ source }}"><code>{{ source }}</code></a></div>


{{ content }}

## Importing

```js
// Global import
import * as {{ page.fileSlug }} from '{{ url }}'
import { ... } from '{{ url }}'

// Lazy imports
const lazy = {}

ChromeUtils.defineESModuleGetter(lazy, {
  {{ page.fileSlug }}: '{{ url }}'
})
```

## Exports

{% for export in exports %}
- [{{ export.name }}](#{{ export.name | slugify }}){% endfor %}

{% for export in exports %}

{% render "esm/export.md", export: export %}

{% endfor %}

