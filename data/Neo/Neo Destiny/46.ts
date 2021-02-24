import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Flareon",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Warm Up",
			},
			effect: {
				en: "If you have any benched Pokémon, search your deck for a Energy card and attach it to 1 of them. Then shuffle your deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Flame",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard a Energy card attached to Light Flareon or this attack does nothing. This attack does 30 damage plus 20 damage for each heads.",
			},
			damage: 30,

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
