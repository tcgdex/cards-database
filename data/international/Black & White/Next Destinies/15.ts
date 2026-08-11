import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},

	illustrator: "James Turner",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		513,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it is angered, the temperature of its head tuft reaches 600° F. It uses its tuft to roast berries.",
	},

	thirdParty: {
		cardmarket: 280240,
		tcgplayer: 87943
	}
}

export default card
