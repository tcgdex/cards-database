import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Penny",
		'fr-fr': "Pania",
		'es-es': "Noa",
		'it-it': "Penny",
		'de-de': "Cosima",
		'pt-br': "Penélope"
	},

    illustrator: "yuu",
    rarity: "Two Star",
    category: "Trainer",

    effect: {
        en: "Look at a random Supporter card that's not Penny from your opponent's deck and shuffle it back into their deck. Use the effect of that card as the effect of this card.",
		'fr-fr': "Regardez une des cartes Supporter du deck de votre adversaire au hasard qui n'est pas Pania et mélangez-la avec son deck. Utilisez son effet en tant qu'effet de cette carte."
    },
    
    trainerType: "Supporter",
}

export default card