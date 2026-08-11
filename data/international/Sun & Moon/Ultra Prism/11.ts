import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'es-es': "Cherrim",
		'it-it': "Cherrim",
		'pt-br': "Cherrim",
		'de-de': "Kinoso"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Weather Guard",
				'fr-fr': "Protection Météo",
				'es-es': "Meteoroguardia",
				'it-it': "Meteodifesa",
				'pt-br': "Guarda do Clima",
				'de-de': "Wetterschutz"
			},
			effect: {
				'en-us': "Your Grass Pokémon have no Weakness.",
				'fr-fr': "Vos Pokémon Grass n’ont pas de Faiblesse.",
				'es-es': "Tus Pokémon Grass no tienen Debilidad.",
				'it-it': "I tuoi Pokémon Grass non hanno debolezza.",
				'pt-br': "Seus Pokémon Grass não têm Fraqueza.",
				'de-de': "Deine Grass-Pokémon haben keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'es-es': "Bomba Germen",
				'it-it': "Semebomba",
				'pt-br': "Bomba de Sementes",
				'de-de': "Samenbomben"
			},

			damage: 30,

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
		'en-us': "If it senses strong sunlight, it opens its folded petals to absorb the sun's rays with its whole body.",
	},

	thirdParty: {
		cardmarket: 315943,
		tcgplayer: 157628
	}
}

export default card
