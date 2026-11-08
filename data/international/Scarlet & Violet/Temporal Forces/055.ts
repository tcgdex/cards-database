import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760685,
				tcgplayer: 542799
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760685,
				tcgplayer: 542799
			}
		},
	],

	illustrator: "Misa Tsutsui",

}

export default card