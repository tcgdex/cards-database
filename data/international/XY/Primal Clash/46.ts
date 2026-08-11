import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball'Glace",
				'es-es': "Bola Hielo",
				'it-it': "Palla Gelo",
				'pt-br': "Bola de Gelo",
				'de-de': "Frostbeule"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They can't swim well yet, and they move much faster by rolling. When they're happy, they clap fins.",
	},

	thirdParty: {
		cardmarket: 273576,
		tcgplayer: 95944
	}
}

export default card
