import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Dugtrio",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Diglett",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rumble",
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
