import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Applin",
		fr: "Verpom",
		es: "Applin",
		pt: "Applin",
		it: "Applin",
		de: "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			es: "Fluido Rociado",
			pt: "Fluido Spray",
			it: "Fluidospray",
			de: "Sprühwasser"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Yoriyuki Ikegami"
}

export default card