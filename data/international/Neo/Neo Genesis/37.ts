import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'de-de': "Granbull"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Charge",
				'fr-fr': "Charge furieuse",
				'de-de': "Wutausbruch"
			},
			effect: {
				'en-us': "This attack does 10 damage plus 10 damage for each damage counter on Granbull. Then, Granbull does 20 damage to itself.",
				'fr-fr': "Cette attaque inflige 10 dégâts plus 10 dégâts pour chaque marqueur de dégâts sur Granbull. Ensuite, Granbull s'inflige 20 dégâts.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 Schadenspunkte für jede Schadensmarke auf Granbull zu. Dann fügt sich Granbull selbst 20 Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is actually timid and easily spooked. If attacked, it flails about to fend off its attacker.",
		'fr-fr': "Il est timide et effarouché. Si on l'attaque, it flails about parer son attaquant."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274437,
				tcgplayer: 85861
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274437,
				tcgplayer: 85861
			}
		}
	]
}

export default card
