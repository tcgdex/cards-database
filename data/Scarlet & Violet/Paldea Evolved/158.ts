import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [278],
	set: Set,

	name: {
		fr: "Goélise",
		en: "Wingull",
		es: "Wingull",
		it: "Wingull",
		pt: "Wingull",
		de: "Wingull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tornade",
			en: "Gust",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card