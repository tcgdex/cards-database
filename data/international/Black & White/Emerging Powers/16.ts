import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Sawsbuck",
		'fr-fr': "Haydaim",
		'es-es': "Sawsbuck",
		'it-it': "Sawsbuck",
		'pt-br': "Sawsbuck",
		'de-de': "Kronjuwild"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Renversement",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The plants growing on its horns change according to the season. The leaders of the herd possess magnificent horns.",
	},

	thirdParty: {
		cardmarket: 279981,
		tcgplayer: 88942
	}
}

export default card
