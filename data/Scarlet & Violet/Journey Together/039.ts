import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Pelipper",
		fr: "Bekipan",
		es: "Pelipper",
		de: "Pelipper",
		it: "Pelipper",
		pt: "Pelipper",
		'es-mx': "Pelipper"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spit Up",
			fr: "Relâche",
			es: "Escupir",
			de: "Entfessler",
			it: "Sfoghenergia",
			pt: "Cuspir",
			'es-mx': "Escupida"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			es: "Picado Rápido",
			de: "Tempohechtsprung",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			'es-mx': "Descenso Veloz"
		},

		damage: 70
	}],

	retreat: 2,
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
