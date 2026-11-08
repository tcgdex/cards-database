import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'de-de': "Panflam"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [390],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Chop",
				'fr-fr': "Coup tranchant",
				'de-de': "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Sauter",
				'de-de': "Draufspringen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84290,
				cardmarket: 278788
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278788,
				tcgplayer: 84290
			}
		},
	],

}

export default card
