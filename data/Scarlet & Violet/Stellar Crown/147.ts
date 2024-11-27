import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Raboot",
		fr: "Lapyro",
		es: "Raboot",
		it: "Raboot",
		pt: "Raboot",
		de: "Kickerlo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			es: "Puntapié",
			it: "Calciobasso",
			pt: "Movimento Baixo",
			de: "Fußtritt"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
