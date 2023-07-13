{% assign exp = export | remod: "something" %}

{% liquid 
  for property in export.properties
    assign prop = property | remod: export.name
    render "esm/export.md", export: prop
  endfor
%}
