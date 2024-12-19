import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Electrode"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Ball"
		},

		damage: "70"
	}],

	retreat: 0,
	rarity: "One Star",

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	}
}

export default card
