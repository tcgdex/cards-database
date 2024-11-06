import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golurk"
	},

	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Double Lariat"
		},

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads."
		},

		damage: "100x"
	}],

	retreat: 4,
	rarity: "None"
}

export default card