import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Claws",
				'fr-fr': "Griffes Enflammées",
				'es-es': "Garras de Fuego",
				'it-it': "Artigli Infuocati",
				'pt-br': "Garras de Fogo",
				'de-de': "Feuerkrallen"
			},

			damage: 70,

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
		'en-us': "Salazzle lives deep in caves and forces the Salandit it has attracted with its pheromones to serve it.",
	},

	thirdParty: {
		cardmarket: 388002,
		tcgplayer: 194952
	}
}

export default card
