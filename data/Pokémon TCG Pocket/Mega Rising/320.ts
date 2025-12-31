import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Primarina ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Brionne"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Hydro Pump"
		},

		damage: 40,
		cost: ["Water"],

		effect: {
			en: "If this Pokémon has at least 1 extra {W} Energy attached, this attack does 40 more damage."
		}
	}, {
		name: {
			en: "Sparkling Aria"
		},

		damage: 100,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card