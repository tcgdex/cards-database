import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Jolteon",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pulse Guard",
			},
			effect: {
				en: "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Needle",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

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
