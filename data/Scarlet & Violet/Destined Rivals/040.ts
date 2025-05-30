import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		de: "Knarbon",
		it: "Charcadet",
		es: "Charcadet",
		pt: "Charcadet"
	},

	illustrator: "nagimiso",
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
			de: "Hitzestoß",
			it: "Caldobomba",
			es: "Explosión de Calor",
			pt: "Raio de Calor"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card