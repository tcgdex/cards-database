import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'de-de': "Kindwurm"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Dreaming of one day flying, it practices by leaping off cliffs every day.",
	},

	thirdParty: {
		cardmarket: 281083,
		tcgplayer: 83702
	}
}

export default card
