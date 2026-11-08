import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [375],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psyshock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Ball",
				'fr-fr': "Boule métallique",
				'de-de': "Metal Ball"
			},
			effect: {
				'en-us': "Put 5 damage counters on the Defending Pokémon.",
				'fr-fr': "Placez 5 marqueurs de dégât sur le Pokémon Défenseur.",
				'de-de': "Put 5 damage counters on the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87372,
				cardmarket: 276117
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87372,
				cardmarket: 276117
			}
		},
	]
}

export default card
