import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rhydon"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Horn Drill"
		},

		damage: "100"
	}],

	retreat: 4,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	}
}

export default card
