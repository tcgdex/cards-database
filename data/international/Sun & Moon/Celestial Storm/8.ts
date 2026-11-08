import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'es-es': "Treecko",
		'it-it': "Treecko",
		'pt-br': "Treecko",
		'de-de': "Geckarbor"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
				'es-es': "Palmetazo",
				'it-it': "Schiaffo",
				'pt-br': "Estalo",
				'de-de': "Klatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
				'es-es': "Coletón",
				'it-it': "Codabotta",
				'pt-br': "Surra de Cauda",
				'de-de': "Schweifvertrimmer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Small hooks on the bottom of its feet catch on walls and ceilings. That is how it can hang from above.",
	},

	thirdParty: {
		cardmarket: 361254,
		tcgplayer: 170816
	}
}

export default card
