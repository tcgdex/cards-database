import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Round",
				'fr-fr': "Chant Canon",
			},
			effect: {
				'en-us': "Does 30 damage times the number of your Pokémon that have the Round attack.",
				'fr-fr': "Inflige 30 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Voice",
				'fr-fr': "Mégaphone",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It increases the power of its punches by vibrating the bumps on its fists. It can turn a boulder to rubble with one punch.",
	},

	thirdParty: {
		cardmarket: 280147,
		tcgplayer: 89057
	}
}

export default card
