import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [279],
	set: Set,

	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'es-es': "Pelipper",
		'de-de': "Pelipper",
		'it-it': "Pelipper",
		'pt-br': "Pelipper",
		'es-mx': "Pelipper"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
		'es-es': "Wingull",
		'de-de': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'es-mx': "Wingull"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spit Up",
			'fr-fr': "Relâche",
			'es-es': "Escupir",
			'de-de': "Entfessler",
			'it-it': "Sfoghenergia",
			'pt-br': "Cuspir",
			'es-mx': "Escupida"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'de-de': "Tempohechtsprung",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'es-mx': "Descenso Veloz"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Nelnal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817191,
				tcgplayer: 623466
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817191,
				tcgplayer: 623466
			}
		},
	],
}

export default card
