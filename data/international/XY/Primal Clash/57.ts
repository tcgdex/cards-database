import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d'Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
			},

			damage: 20,

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

	retreat: 2,

	description: {
		'en-us': "It shoots positive and negative electricity between the tips of its two antennae and zaps its enemies.",
	},

	thirdParty: {
		cardmarket: 273588,
		tcgplayer: 95955
	}
}

export default card
