import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Charmeleon",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		5,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmander",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Claws",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Bonfire",
			},
			effect: {
				en: "Flip 3 coins. For each heads, discard 1 Energy card attached to Blaine's Charmeleon. If you can't discard Energy cards, this attack does nothing. This attack does 10 damage times the number of heads to each of your opponent's Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},
			damage: 10,

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
