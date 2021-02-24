import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Victreebel",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lure",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Acid",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
