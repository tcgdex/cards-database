import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Paw Shake Punch",
			fr: "Coup de Patte",
			es: "Sacudir y Dar la Patita",
			it: "Pugno Qua la Zampa",
			pt: "Dá Soquinho"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card