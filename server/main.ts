import {Meteor} from 'meteor/meteor';

import {loadWishlists} from './imports/fixtures/wishes';

Meteor.startup(() => {
    loadWishlists();
});