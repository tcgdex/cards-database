import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Metal Cube 01",
		fr: "Kokiyas",
		de: "Muschas"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		90,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Metal Reversal",
				fr: "Poigne de fer",
				de: "Eisener Griff"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lick",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "Attach this card to 1 of your Metal Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Metal Cube 01.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

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
				tcgplayer: 89136,
				cardmarket: 275004
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
