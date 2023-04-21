/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export default class HdsSegmentedGroupIndexComponent extends Component {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-segmented-group'];

    // add a class based on the @xxx argument
    // classes.push(`hds-segmented-group--[variant]-${this.xxx}`);

    return classes.join(' ');
  }
}
