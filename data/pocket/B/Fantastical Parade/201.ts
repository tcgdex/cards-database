import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [303],

	name: {
		'en-us': "Mega Mawile ex"
	},

	illustrator: "NC Empire",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'en-us': "Its two sets of jaws thrash about violently as if\nthey each had a will of their own. One gnash from\nthem can turn a boulder to dust."
	},

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Heat-Up Crunch"
		},

		damage: 60,
		cost: ["Metal", "Colorless"],

		effect: {
			'en-us': "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card