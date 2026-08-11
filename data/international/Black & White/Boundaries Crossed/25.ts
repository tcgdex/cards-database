import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'es-es': "Pignite",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'de-de': "Ferkokel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		499,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Firebreathing",
				'fr-fr': "Souffle-Feu",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Whatever it eats becomes fuel for the flame in its stomach. When it is angered, the intensity of the flame increases.",
	},

	thirdParty: {
		cardmarket: 280612,
		tcgplayer: 88062
	}
}

export default card
