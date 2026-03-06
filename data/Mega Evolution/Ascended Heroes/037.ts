import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Raboot",
		fr: "Lapyro",
		es: "Raboot",
		'es-mx': "Raboot",
		de: "Kickerlo",
		it: "Raboot",
		pt: "Raboot"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [814],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			es: "Puntapié",
			'es-mx': "Barredora",
			de: "Fußtritt",
			it: "Calciobasso",
			pt: "Movimento Baixo"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			'es-mx': "Combustión",
			de: "Glühen",
			it: "Fuoco Continuo",
			pt: "Combustão"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675849,
		cardmarket: 869648
	}
}

export default card