import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct"
	},

	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Knock Back"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		},

		damage: "70"
	}],

	retreat: 3,
	rarity: "Two Diamond"
}

export default card
