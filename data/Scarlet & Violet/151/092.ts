import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		fr: "Fantominus",
		en: "Gastly",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Gaz Suffocant",
			en: "Suffocating Gas",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			de: "Würgegas"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card