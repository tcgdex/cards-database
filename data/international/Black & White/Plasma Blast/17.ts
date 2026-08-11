import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 100,

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
				'en-us': "Cleanse Away",
				'fr-fr': "Soin Groupé",
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Benched Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
			},

			damage: 70,

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
		'en-us': "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.",
	},

	thirdParty: {
		cardmarket: 281038,
		tcgplayer: 86624
	}
}

export default card
