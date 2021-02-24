import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Armaldo ex",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 160,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Anorith",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
			},
			effect: {
				en: "As long as Armaldo ex has any React Energy cards attached to it, Armaldo ex is both Grass and Fighting type.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
			},
			effect: {
				en: "Remove 2 damage counters from Armaldo ex.",
			},
			damage: 40,

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
