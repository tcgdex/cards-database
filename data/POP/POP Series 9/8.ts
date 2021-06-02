import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Gabite",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		444,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Gible",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burrow",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distorted Wave",
			},
			effect: {
				en: "Before doing damage, remove 2 damage counters from the Defending Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
