import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Petilil"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Blot"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon."
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
