import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
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

	retreat: 2,

	description: {
		'en-us': "When it dangles from a tree branch, it looks just like an acorn. It enjoys scaring other Pokémon.",
	},

	thirdParty: {
		cardmarket: 361258,
		tcgplayer: 170820
	}
}

export default card
