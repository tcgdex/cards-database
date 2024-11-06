import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Powder Snow"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "None"
}

export default card