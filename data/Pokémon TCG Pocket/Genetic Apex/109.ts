import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross"
	},

	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder Fang"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: "80"
	}],

	retreat: 3,
	rarity: "Three Diamond"
}

export default card
