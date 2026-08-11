import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo",
		'es-es': "Keldeo",
		'it-it': "Keldeo",
		'pt-br': "Keldeo",
		'de-de': "Keldeo"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		647,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Slicing Blade",
				'fr-fr': "Lame Tranchante",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
			},
			effect: {
				'en-us': "Does 10 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It crosses the world, running over the surfaces of oceans and rivers. It appears at scenic waterfronts.",
	},

	thirdParty: {
		cardmarket: 280634,
		tcgplayer: 86433
	}
}

export default card
