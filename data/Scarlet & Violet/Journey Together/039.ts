import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [279],
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
	evolveFrom: {
		en: "Wingull",
		fr: "Goélise",
		es: "Wingull",
		de: "Wingull",
		it: "Wingull",
		pt: "Wingull",
		"es-mx": "Wingull"
	},
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
	illustrator: "Nelnal",

	thirdParty: {
		cardmarket: 817191
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
