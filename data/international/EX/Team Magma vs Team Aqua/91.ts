import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Entei ex",
		'fr-fr': "Entei ex",
		'de-de': "Entei ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [244],

	hp: 100,

	stage: "Basic",
	types: [
		"Fire"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes calcinantes",
				'de-de': "Searing Flame"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Burned."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme éclatante",
				'de-de': "Bright Flame"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Entei ex.",
				'fr-fr': "Défaussez 2 Énergies attachées à Entei ex.",
				'de-de': "Discard 2 Energy attached to Entei ex."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85278,
				cardmarket: 276068
			}
		}
	]
}

export default card
