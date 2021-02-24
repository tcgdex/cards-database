import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Slakoth",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		287,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
