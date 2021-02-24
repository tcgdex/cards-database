import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Lunatone",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Moonglow",
			},
			effect: {
				en: "The Retreat Cost for each Solrock you have in play is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Foresight",
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Target Beam",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Solrock you have in play.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
