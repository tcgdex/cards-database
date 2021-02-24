import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Zangoose",
	},
	illustrator: "Zu-Ka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 70,
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
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for a Colorless Basic Pokémon or Basic Pokémon with Team Magma in its name and put it onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Play",
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play with Team Magma in its name.",
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
