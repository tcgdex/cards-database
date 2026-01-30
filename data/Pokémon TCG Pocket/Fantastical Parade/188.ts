import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Mawile ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		en: "Its two sets of jaws thrash about violently as if\nthey each had a will of their own. One gnash from\nthem can turn a boulder to dust."
	},

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Heat-Up Crunch"
		},

		damage: 60,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "Until this Pokémon leaves the Active Spot, this Pokémon's Heat-Up Crunch attack does +30 damage. This effect stacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card