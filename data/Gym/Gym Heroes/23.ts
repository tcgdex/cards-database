import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Sandslash",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 60,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandshrew",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Needles",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Sandstorm",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
