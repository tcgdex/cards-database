import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card