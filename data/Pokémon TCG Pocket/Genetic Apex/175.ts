import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Muk"
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Venoshock"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage."
		},

		damage: "70+"
	}],

	retreat: 3,
	rarity: "Three Diamond"
}

export default card
