import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon"
	},

	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Bubble Drain"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
