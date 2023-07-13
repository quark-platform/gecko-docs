{% liquid
case export.kind
when "variable"
  render "esm/variable.md", export: export
when "function"
  render "esm/function.md", export: export
when "object"
  render "esm/object.md", export: export
endcase %}