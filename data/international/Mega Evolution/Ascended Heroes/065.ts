import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'es-mx': "Charjabug",
		'de-de': "Akkup",
		'it-it': "Charjabug",
		'pt-br': "Charjabug"
	},

	evolveFrom: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'es-mx': "Grubbin",
		'de-de': "Mabula",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [737],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'es-mx': "Impacto Estático",
			'de-de': "Statischer Schock",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática"
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
			cardmarket: 869676,
			tcgplayer: 675877
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870240,
			tcgplayer: 676904
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870239,
			tcgplayer: 677044
		}
	},
],
}

export default card
