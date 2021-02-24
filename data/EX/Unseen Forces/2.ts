import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ariados",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
			},
			effect: {
				en: "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Trap",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, the new Defending Pokémon is now Asleep and Poisoned. Your opponent chooses the Defending Pokémon to switch.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
