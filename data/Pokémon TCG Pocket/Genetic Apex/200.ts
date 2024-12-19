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

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Drill Peck"
		},

		damage: "40"
	}],

	retreat: 0,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
	}
}

export default card
