import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
		'de-de': "Moorabbel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [259],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'de-de': "Bubble"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed"
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275688,
				tcgplayer: 87232
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275688,
				tcgplayer: 87232
			}
		},
		{
			type: "normal",
			stamp: ['reed-weichler'],
			thirdParty: {
				tcgplayer: 477403
			}
		},
	],

}

export default card
