import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golem"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself."
		},

		damage: "150"
	}],

	retreat: 4,
	rarity: "Three Diamond"
}

export default card
