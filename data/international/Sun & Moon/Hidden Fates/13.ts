import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Numbing Water",
				'fr-fr': "Eau Paralysante",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In many places, there are folktales of stardust falling into the ocean and becoming Staryu.",
	},

	thirdParty: {
		cardmarket: 394777,
		tcgplayer: 197657
	}
}

export default card
