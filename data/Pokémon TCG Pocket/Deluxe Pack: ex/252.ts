import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Steel Wing"
		},

		damage: 70,
		cost: ["Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card