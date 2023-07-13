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
<div id="{{ export.name | slugify }}">

### `{{ export.name }}{% if export.generics %}<{{ export.generics | join: ', ' }}>{% endif %}({% for arg in export.args %}{{arg.name}}: {{arg.type}}{% unless forloop.last %}, {% endunless %}{% endfor %}){% if export.returns %} => {{ export.returns.type }}{% endif %}`

{{ export.description }}

{% if export.generics %}

#### Generics
{% for generic in export.generics %}
- `{{ generic }}`{% endfor %}

{% endif %}

#### Parameters
{% for arg in export.args %}
- `{{ arg.name }}` (`{{ arg.type }}`): {{ arg.description }}{% endfor %}

{% if export.returns %}
#### Returns
Type: `{{ export.returns.type }}`

{{ export.returns.description }}

{% endif %}

</div>
{% endfor %}
