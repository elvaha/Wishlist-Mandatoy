import {Wishlists} from '../../../both/collections/wishlists.collection';
import {Wishlist} from '../../../both/models/wishlist.model';

export function loadWishlists(){
    if(Wishlists.find().cursor.count() === 0){
        const wishlists : Wishlist[] = [{
            'name': 'birthday',
            'description': 'wishes for Martins birthday'
    }, {
            'name': 'Christmas',
            'description': 'wishes for christmas that Carsten want'
    }
    ];
        
        wishlists.forEach((wishlist: Wishlist) => Wishlists.insert(wishlist));
    }
}