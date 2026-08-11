import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Amaura",
		'fr-fr': "Amagara",
		'es-es': "Amaura",
		'it-it': "Amaura",
		'pt-br': "Amaura",
		'de-de': "Amarino"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		698,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
				'es-es': "Rayo Aurora",
				'it-it': "Raggiaurora",
				'pt-br': "Raio Aurora",
				'de-de': "Aurorastrahl"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	evolveFrom: {
		'en-us': "Sail Fossil",
		'fr-fr': "Fossile Nageoire",
		'es-es': "Fósil Aleta",
		'it-it': "Fossilpinna",
		'pt-br': "Fóssil de Vela",
		'de-de': "Flossenfossil"
	},

	description: {
		'en-us': "This ancient Pokémon was restored from part of its body that had been frozen in ice for over 100 million years.",
	},

	thirdParty: {
		cardmarket: 281689,
		tcgplayer: 92200
	}
}

export default card
