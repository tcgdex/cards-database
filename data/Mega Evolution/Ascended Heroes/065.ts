import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		'es-mx': "Charjabug",
		de: "Akkup",
		it: "Charjabug",
		pt: "Charjabug"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			'es-mx': "Impacto Estático",
			de: "Statischer Schock",
			it: "Shock Statico",
			pt: "Choque de Estática"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675877,
		cardmarket: 869676
	}
}

export default card