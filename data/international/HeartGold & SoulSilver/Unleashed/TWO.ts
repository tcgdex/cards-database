import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Alph Lithograph",
		'fr-fr': "Lithographie d'Alpha",
		'de-de': "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Shuffle your deck!",
		'fr-fr': "Mélangez votre deck.",
		'de-de': "Mische dein Deck!"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279156,
				tcgplayer: 83510
			}
				},
	],
	hp: 0,
	retreat: 0
}

export default card
