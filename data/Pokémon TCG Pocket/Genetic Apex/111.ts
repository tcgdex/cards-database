import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Heliolisk"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		en: "Helioptile"
	},


	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Quick Attack"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage."
		},

		damage: "40+"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
