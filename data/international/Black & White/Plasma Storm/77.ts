import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'Pied",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Cross",
				'fr-fr': "Passage Éclair",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A well-trained one can sense auras to identify and take in the feelings of creatures over half a mile away.",
	},

	thirdParty: {
		cardmarket: 280817,
		tcgplayer: 86883
	}
}

export default card
