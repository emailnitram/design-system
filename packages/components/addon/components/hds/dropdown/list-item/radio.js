/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getElementId } from '../../form/utils/getElementId';

export default class HdsDropdownListItemRadioComponent extends Component {
  /**
   * Determines the unique ID to assign to the radio control
   */
  get id() {
    return getElementId(this);
  }
}
