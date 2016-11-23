import {CollectionObject} from './collection-object.model';

export interface Wishlist extends CollectionObject{
    name: string;
    description: string;
}