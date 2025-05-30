import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Sandile",
		fr: "Mascaïman",
		de: "Ganovil",
		it: "Sandile",
		es: "Sandile",
		pt: "Sandile"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			it: "Rosicchiamento",
			es: "Roer",
			pt: "Roída"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card