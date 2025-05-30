import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Beldum",
		fr: "Terhal de Pierre",
		de: "Troys Tanhel",
		it: "Beldum di Rocco",
		es: "Beldum de Máximo",
		pt: "Beldum do Steven"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card