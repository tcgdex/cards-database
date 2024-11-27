import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine ex"
	},

	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Inferno Onrush"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		},

		damage: "120"
	}],

	retreat: 2,
	rarity: "Two Star"
}

export default card
