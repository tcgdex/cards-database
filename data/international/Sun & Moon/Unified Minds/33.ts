import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		757,
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
			],
			name: {
				'en-us': "Live Coal",
				'fr-fr': "Charbon Mutant",
				'es-es': "Carbón Activado",
				'it-it': "Carboni Ardenti",
				'pt-br': "Carvão Vivo",
				'de-de': "Glühende Kohlen"
			},

			damage: 10,

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
		'en-us': "The males will do whatever the females tell them. They give the females most of their food. Due to malnutrition, the males can't evolve.",
	},

	thirdParty: {
		cardmarket: 387997,
		tcgplayer: 194951
	}
}

export default card
