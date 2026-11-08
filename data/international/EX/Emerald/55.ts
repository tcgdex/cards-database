import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
		'de-de': "Meditie"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied voltige",
				'de-de': "Hight Jump Kick"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Fake Out",
				'fr-fr': "Bluff",
				'de-de': "Fake Out"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 87281,
		cardmarket: 276566
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87281,
				cardmarket: 276566
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87281,
				cardmarket: 276566
			},
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				tcgplayer: 477552,
				cardmarket: 871509
			},
		}
	],
}

export default card
