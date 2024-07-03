import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		it: "Medicham",
		pt: "Medicham",
		de: "Meditalis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			es: "Puntapié",
			it: "Calciobasso",
			pt: "Movimento Baixo",
			de: "Fußtritt"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
			es: "Patada Salto Alta",
			it: "Calcinvolo",
			pt: "Chute de Pulo Alto",
			de: "Turmkick"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card