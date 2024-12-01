import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Voice"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
