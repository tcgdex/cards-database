import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stone Edge",
				'fr-fr': "Lame de Roc",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Explosion",
				'fr-fr': "Explosion",
			},
			effect: {
				'en-us': "This Pokémon does 100 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 100 dégâts.",
			},
			damage: 150,

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
		'en-us': "It tumbles down mountains, leaving grooves from peak to base. Stay clear of these grooves.",
	},

	thirdParty: {
		cardmarket: 288483,
		tcgplayer: 113703
	}
}

export default card
