---
title: Icon Library
layout:
  sidecar: false
caption: Icons can be used to support and enhance meaning and can help call out information.
links:
  figma: https://www.figma.com/file/TLnoT5AYQfy3tZ0H68BgOr/Flight-Icons?node-id=164%3A0
  github: https://github.com/hashicorp/design-system/tree/main/packages/flight-icons
---

<Doc::IconsList
  @icons={{this.filteredIcons}}
  @onSelect={{this.selectIconSize}}
  @selectedIconSize={{this.selectedIconSize}}
  @searchQuery={{this.searchQuery}}
  @searchIcons={{this.searchIcons}}
/>