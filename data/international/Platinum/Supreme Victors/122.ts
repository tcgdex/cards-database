import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'de-de': "Rihorn"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [111],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'korne",
				'de-de': "Hornbohrer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "Its powerful tackles can destroy anything. However, it is too slow witted to help people work."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88743,
				cardmarket: 278813
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278813,
				tcgplayer: 88743
			}
		},
	],

}

export default card
