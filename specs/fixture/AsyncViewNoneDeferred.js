import {View} from 'backbone.marionette';

module.exports = View.extend({
    template: require('./tpl/SimpleView.hbs'),
    className: 'test',

    promise: function () {
        return {data: 123};
    }
});
