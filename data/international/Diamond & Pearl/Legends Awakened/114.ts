import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'de-de': "Quapsel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		60,
	],

	hp: 40,

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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Twiddle",
				'fr-fr': "Tripoter",
				'de-de': "Däumchen drehen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt. Bei \"Zahl\" schläft das Verteidigende Pokémon jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet.",
	},

	thirdParty: {
		cardmarket: 278263,
		tcgplayer: 88259
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
