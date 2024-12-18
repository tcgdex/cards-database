import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Kingambit",
		fr: "Scalpereur",
		es: "Kingambit",
		it: "Kingambit",
		pt: "Kingambit",
		de: "Gladimperio"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Elbow Strike",
			fr: "Coup de Coude",
			es: "Codazo",
			it: "Colpogomito",
			pt: "Golpe de Cotovelo",
			de: "Ellbogenstoß"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	evolveFrom: {
		en: "Bisharp"
	}
}

export default card