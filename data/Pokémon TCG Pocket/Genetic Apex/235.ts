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
	evolveFrom: {
		en: "Voltorb"
	},

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Ball"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Star",

	description: {
		en: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
	}
}

export default card
