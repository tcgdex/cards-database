import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		},

		damage: "100"
	}],

	retreat: 2,
	rarity: "None"
}

export default card