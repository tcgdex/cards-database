import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gogoat"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: "70"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
