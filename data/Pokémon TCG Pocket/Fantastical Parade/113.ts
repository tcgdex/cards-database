import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [303],

	name: {
		en: "Mega Mawile ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

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