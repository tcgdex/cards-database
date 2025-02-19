import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dodrio"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Doduo"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Drill Peck"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Diamond",

	description: {
		en: "An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.",
	}
}

export default card
