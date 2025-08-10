import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		en: "Steven's Beldum",
		fr: "Terhal de Pierre",
		de: "Troys Tanhel",
		es: "Beldum de Máximo",
		it: "Beldum di Rocco",
		pt: "Beldum do Steven"
	},

	rarity: "None",
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
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card