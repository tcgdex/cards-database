import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Do the Wave"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon."
		},

		damage: "30x"
	}],

	retreat: 1,
	rarity: "None"
}

export default card