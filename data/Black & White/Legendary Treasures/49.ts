import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Emolga",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
	],

	hp: 70,

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
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 281147
	}
}

export default card
