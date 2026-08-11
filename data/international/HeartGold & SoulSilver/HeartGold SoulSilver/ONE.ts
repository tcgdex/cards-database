import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Alph Lithograph",
		'fr-fr': "Lithographie d’Alph",
		'de-de': "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez la main de votre adversaire !",
		'en-us': "Look at your opponent's hand!",
		'de-de': "Schau dir die Handkarten deines Gegners an!"
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278972,
				tcgplayer: 83509
			}
		},
	],

}

export default card
