import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Kuroimori",
	rarity: "One Star",
	category: "Pokemon",
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Mega Drain"
		},

		cost: ["Grass", "Grass", "Colorless", "Colorless"],
		damage: 80,

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}]
}

export default card