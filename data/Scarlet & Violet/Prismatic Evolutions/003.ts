import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [127],
	set: Set,

	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		pt: "Pinsir",
		it: "Pinsir",
		de: "Pinsir"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			pt: "Talho",
			it: "Lacerazione",
			de: "Schlitzer"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Uninori",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}]
}

export default card