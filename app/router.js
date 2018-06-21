import Ember from 'ember';
import config from './config/environment';
const Router = Ember.Router.extend({
    location: config.locationType
});
Router.map(function () {
    this.route('css');
    this.route('dpl-components');
    this.route('ui-components');
    this.route('javascript');
    this.route('getting-started');
    this.route('layouts');
});
export default Router;
