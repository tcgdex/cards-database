import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vileplume"
	},

	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Soothing Scent"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep"
		},

		damage: "80"
	}],

	retreat: 3,
	rarity: "None"
}

export default card