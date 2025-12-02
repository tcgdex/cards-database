import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		'es-mx': "Krokorok",
		de: "Rokkaiman",
		it: "Krokorok",
		pt: "Krokorok"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [552],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			'es-mx': "Confrontar",
			de: "Konfrontieren",
			it: "Confronto",
			pt: "Confrontar"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857640
	}
}

export default card