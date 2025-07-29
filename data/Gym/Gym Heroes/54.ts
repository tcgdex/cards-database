import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Psyduck",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

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
				en: "Scratch",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Call for Friend",
			},
			effect: {
				en: "Flip a coin. If heads, you may search your deck for a Basic Pokémon with Misty in its name and put it onto your Bench. (You can't use this attack if your Bench is full.) Shuffle your deck afterward.",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	variants: {
		wPromo: true
	},

	thirdParty: {
		cardmarket: 274190
	}
}

export default card
