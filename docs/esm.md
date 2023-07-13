# (Documented) ES Modules

Mozilla has a bunch of shared logic located inside of es modules that use the extension `.sys.mjs`.

## Importing

TODO

## Modules

{% for module in collections.esm %}
 - [`{{module.fileSlug}}.sys.mjs`](./{{module.fileSlug}}/)
{%- endfor -%}
