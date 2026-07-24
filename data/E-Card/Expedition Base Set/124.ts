import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Grass Cube 01",
		fr: "Pikachu",
		de: "Pikachu"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		25,
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
				en: "Sleep Poison",
				fr: "Queue-éclair",
				de: "Blitzschwanz"
			},
			effect: {
				en: "Attach this card to 1 of your Grass Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Grass Cube 01.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Lightning",
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
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88076,
				cardmarket: 274999
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
