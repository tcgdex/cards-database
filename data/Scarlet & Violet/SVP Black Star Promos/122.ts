import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Lazy Press",
			fr: "Pression Paresseuse",
			es: "Presión Perezosa",
			it: "Pressa Pigra",
			pt: "Compressão Preguiçosa",
			de: "Träge Presse"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "Po-Suzuki"
}

export default card