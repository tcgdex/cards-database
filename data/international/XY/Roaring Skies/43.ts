import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "HiRON",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sweet Kiss",
				'fr-fr': "Doux Baiser",
				'es-es': "Beso Dulce",
				'it-it': "Dolcebacio",
				'pt-br': "Beijo Doce",
				'de-de': "Bitterkuss"
			},
			effect: {
				'en-us': "Your opponent draws a card.",
				'fr-fr': "Votre adversaire pioche une carte.",
				'es-es': "Tu rival roba 1 carta.",
				'it-it': "Il tuo avversario pesca una carta.",
				'pt-br': "Seu oponente compra um card.",
				'de-de': "Dein Gegner zieht 1 Karte."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up.",
	},

	thirdParty: {
		cardmarket: 282711,
		tcgplayer: 98079
	}
}

export default card
