import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Misa Tsutsui",

	attacks: [{
		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Live Coal",
			'de-de': "Glühende Kohlen"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "This hot-blooded Pokémon is filled with curiosity. When it gets angry or starts fighting, its short mane gets hot."
	},

	dexId: [667],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574046,
				tcgplayer: 246838
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574046,
				tcgplayer: 246838
			}
		},
	],
}

export default card
