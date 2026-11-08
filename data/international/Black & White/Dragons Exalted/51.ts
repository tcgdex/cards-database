import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shadow Steal",
				'fr-fr': "Vol d'Ombre",
			},
			effect: {
				'en-us': "Does 50 damage times the number of Special Energy cards in your opponent's discard pile.",
				'fr-fr': "Inflige 50 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Plentiful Placement",
				'fr-fr': "Placement Multiple",
			},
			effect: {
				'en-us': "Put 4 damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez 4 marqueurs de dégâts sur 1 des Pokémon de votre adversaire.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "At dusk, swarms of them are carried aloft on winds. When noticed, they suddenly vanish.",
	},

	thirdParty: {
		cardmarket: 280490,
		tcgplayer: 84949
	}
}

export default card
