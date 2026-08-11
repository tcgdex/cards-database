import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [231],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Phanpy.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Phanpy.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Phanpy zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
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
		'en-us': "It swings its long snout around playfully, but because it is so strong, that can be dangerous."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88003,
				cardmarket: 279049
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88003,
				cardmarket: 279049
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480431,
				cardmarket: 279049
			}
		},
	],

}

export default card
