import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Chop",
			fr: "Coup Tranchant",
			es: "Cortar",
			it: "Ceffone",
			pt: "Trincar"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card