import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		en: "Electrike"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Lightning",
		],
		name: {
			en: "Recharge"
		},
		effect: {
			en: "Search your deck for a Lightning Energy card and attach it to Electrike. Shuffle your deck afterward."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Quick Attack"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,
}

export default card
