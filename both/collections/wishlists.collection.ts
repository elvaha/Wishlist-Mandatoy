import {MongoObservable} from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

export const Wishlists = new MongoObservable.Collection('wishlists');

function loggedIn() {
  return !!Meteor.user();
}

 

Wishlists.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});