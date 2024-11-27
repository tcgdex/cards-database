import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Spearow"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
