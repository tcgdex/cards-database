import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [309],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Super Thunder Wave",
				'fr-fr': "Super cage éclair",
				'de-de': "Super Donnerwelle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le ou les deux Pokémon Défenseurs sont maintenant Paralysés.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' sind alle Verteidigenden Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275701,
				tcgplayer: 85130
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275701,
				tcgplayer: 85130
			}
		},
	],

}

export default card
