import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flamethrower"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon."
		},

		damage: "90"
	}],

	retreat: 1,
	rarity: "None"
}

export default card