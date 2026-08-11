import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Alph Lithograph",
		'fr-fr': "Lithographie d’Alpha",
		'de-de': "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "REGARDEZ TOUTES VOS CARTES RECOMPENSE QUI SONT FACE CACHEE!",
		'en-us': "LOOK AT ALL OF YOUR FACE DOWN PRIZE CARDS!",
		'de-de': "Schau dir deine verdeckten Preiskarten an!"
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83512,
				cardmarket: 279530
			}
		},
	],

}

export default card
