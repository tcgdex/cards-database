import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'de-de': "Hubelupf"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [188],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "The bloom on top of its head opens and closes as the temperature fluctuates up and down."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89257,
				cardmarket: 279023
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89257,
				cardmarket: 279023
			}
		},
	],

}

export default card
