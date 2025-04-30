import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
		es: "Copperajah",
		de: "Patinaraja",
		it: "Copperajah",
		pt: "Copperajah",
		'es-mx': "Copperajah"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 100
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Mega Impact",
			fr: "Méga Impact",
			es: "Megaimpacto",
			de: "Mega-Einschlag",
			it: "Mega Impatto",
			pt: "Mega-impacto",
			'es-mx': "Megaimpacto"
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
