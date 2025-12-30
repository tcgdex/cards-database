import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [484],
	hp: 150,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			en: "Dimensional Storm"
		},

		damage: 150,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard 3 {W} Energy from this Pokémon. This attack also does 20 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card