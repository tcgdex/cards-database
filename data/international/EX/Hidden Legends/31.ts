import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'de-de': "Lepumentas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [344],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyper Beam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez 1 Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ram"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84333,
				cardmarket: 276105
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84333,
				cardmarket: 276105
			}
		},
	]
}

export default card
