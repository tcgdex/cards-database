import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "None",
	category: "Pokemon",
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Bubble Drain"
		},

		cost: ["Water", "Water", "Colorless"],
		damage: 80,

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	hp: 140,
	suffix: "EX",

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card