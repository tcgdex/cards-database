import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [278],
	set: Set,

	name: {
		en: "Wingull",
		fr: "Goélise",
		es: "Wingull",
		it: "Wingull",
		pt: "Wingull",
		de: "Wingull"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card