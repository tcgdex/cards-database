import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Strike",
				'fr-fr': "Frap’éclair",
				'de-de': "Blitzschlag"
			},
			effect: {
				'en-us': "You may do 40 damage plus 60 more damage. If you do, discard all Lightning Energy attached to Electrode.",
				'fr-fr': "Vous pouvez infliger 40 dégâts plus 60 dégâts supplémentaires. Dans ce cas, défaussez toutes les cartes Énergie Lightning attachées à Electrode.",
				'de-de': "Du kannst mit diesem Angriff kann 40 Schadenspunkte plus 60 weitere Schadenspunkte zufügen. Wenn du das machst, lege alle an Lektrobal angelegten -Energien auf deinen Ablagestapel."
			},
			damage: "40+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is dangerous. If it has too much electricity and has nothing to do, it amuses itself by exploding."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85159,
				cardmarket: 279564
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279564,
				tcgplayer: 85159
			}
		},
	],

}

export default card
