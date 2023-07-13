<div id="{{ export.name | slugify }}">

### `{{ export.name }}{% if export.generics %}<{{ export.generics | join: ', ' }}>{% endif %}({% for arg in export.args %}{{arg.name}}{% unless forloop.last %}, {% endunless %}{% endfor %}){% if export.returns %} => {{ export.returns.type }}{% endif %}`

{{ export.description }}

{% if export.generics %}

#### Generics
{% for generic in export.generics %}
- `{{ generic }}`{% endfor %}

{% endif %}

#### Parameters
{% for arg in export.args %}
- `{{ arg.name }}: {{ arg.type }}`
>> {{ arg.description | replace: "\n", "\n>> " | log}}
{%- endfor -%}

{% if export.returns %}
#### Returns
Type: `{{ export.returns.type }}`

{{ export.returns.description }}

{% endif %}

</div>
