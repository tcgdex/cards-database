import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'es-es': "Sewaddle",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'de-de': "Strawickl"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		540,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "String Shot",
				'fr-fr': "Sécrétion",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Leavanny dress it in clothes they made for it when it hatched. It hides its head in its hood while it is sleeping.",
	},

	thirdParty: {
		cardmarket: 279968,
		tcgplayer: 89089
	}
}

export default card
