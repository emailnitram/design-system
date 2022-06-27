import Route from '@ember/routing/route';

export default class ComponentsFormCheckboxRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'active', 'focus'];
    return {
      STATES,
    };
  }
}