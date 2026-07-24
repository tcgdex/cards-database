import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		'es-mx': "Charjabug",
		de: "Akkup",
		it: "Charjabug",
		pt: "Charjabug"
	},

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		'es-mx': "Grubbin",
		de: "Mabula",
		it: "Grubbin",
		pt: "Grubbin",
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
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			'es-mx': "Impacto Estático",
			de: "Statischer Schock",
			it: "Shock Statico",
			pt: "Choque de Estática"
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
		en: "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
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
			cardmarket: 870239,
			tcgplayer: 676904
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870240,
			tcgplayer: 677044
		}
	},
],
}

export default card
