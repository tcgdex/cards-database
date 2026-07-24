import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Psychic Cube 01",
		fr: "Carapuce",
		de: "Schiggy"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		7,
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
				en: "Psy Confuse",
				fr: "Coup d'boule",
				de: "Headbutt"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Bubblebeam"
			},
			effect: {
				en: "Attach this card to 1 of your Psychic Pokémon in play. That Pokémon may us this card's attack instead of its own. At the end of your turn, discard Psychic Cube 01.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

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
				tcgplayer: 89487,
				cardmarket: 275006
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
