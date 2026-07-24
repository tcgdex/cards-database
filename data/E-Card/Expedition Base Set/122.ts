import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Fire Cube 01",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		43,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Singe",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sleep Seed",
				fr: "Graine dodo",
				de: "Schlafsamen"
			},
			effect: {
				en: "Attach this card to 1 of your Fire Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Fire Cube 01.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87840,
				cardmarket: 274997
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
