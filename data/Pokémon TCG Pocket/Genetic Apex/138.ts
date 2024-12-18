import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Slash"
		},

		damage: "70"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	}
}

export default card
