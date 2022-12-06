Here is the API for the component:

<Doc::ComponentApi as |C|>
  <C.Property @name="size" @type="enum" @value="small, medium, large" @default="medium"/>
  <C.Property @name="type" @type="enum" @value="filled, inverted, outlined" @default="filled"/>
  <C.Property @name="color" @type="enum" @value="neutral, neutral-dark-mode" @default="neutral"/>
  <C.Property @name="text" @type="string">
    The text value that should go in the badge counter.
  </C.Property>
  <C.Property @name="...attributes">
    `...attributes` spreading is supported on this component.
  </C.Property>
</Doc::ComponentApi>