import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Relicanth",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		369,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Deep Sea Pressure",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless Colorless more.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wave",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],





}

export default card
