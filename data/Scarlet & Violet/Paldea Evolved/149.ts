import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Charibari",
		en: "Cufant",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card