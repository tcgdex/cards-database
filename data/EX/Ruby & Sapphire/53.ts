import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Thunder Wave",
				fr: "Super cage éclair",
				de: "Super Donnerwelle"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le ou les deux Pokémon Défenseurs sont maintenant Paralysés.",
				de: "Wirf eine Münze. Bei 'Kopf' sind alle Verteidigenden Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
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

	thirdParty: {
		cardmarket: 275678,
		tcgplayer: 85130
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
