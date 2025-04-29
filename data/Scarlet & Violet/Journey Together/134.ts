import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Corvisquire",
		fr: "Bleuseille de Nabil",
		es: "Corvisquire de Paul",
		de: "Hops Kranoviz",
		it: "Corvisquire di Hop",
		pt: "Corvisquire do Lupo",
		'es-mx': "Corvisquire de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			es: "Picado Rápido",
			de: "Tempohechtsprung",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			'es-mx': "Descenso Veloz"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			de: "Rasierflügel",
			it: "Ala Tagliente",
			pt: "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
