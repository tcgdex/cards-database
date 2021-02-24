import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Armaldo",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Anorith",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Blast",
			},
			effect: {
				en: "Discard up to 5 Fighting Energy cards attached to Armaldo. For each Energy card you discarded, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) This attack's damage isn't affected by Weakness or Resistance.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
			},
			damage: 60,

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
