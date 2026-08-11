import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'de-de': "Krakeelo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [294],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cracking Voice",
				'fr-fr': "Super voix",
				'de-de': "Cracking Voice"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, each Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing léger",
				'de-de': "Light Punch"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86840,
				cardmarket: 276113
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86840,
				cardmarket: 276113
			}
		},
	]
}

export default card
