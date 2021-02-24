import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Arcanine",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
			},
			effect: {
				en: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blow",
			},
			effect: {
				en: "You may discard any number of Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
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
