import {CollectionObject} from './collection-object.model';
import {Wish} from './wish.model';

export interface Wishlist extends CollectionObject{
    name: string;
    description: string;
    wishes : [{}];
}