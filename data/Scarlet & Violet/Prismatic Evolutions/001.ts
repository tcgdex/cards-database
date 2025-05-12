import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		pt: "Exeggcute",
		it: "Exeggcute",
		de: "Owei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica",
			de: "Ramme"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Iori Suzuki"
}

export default card