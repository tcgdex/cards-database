import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "nagimiso"
}

export default card