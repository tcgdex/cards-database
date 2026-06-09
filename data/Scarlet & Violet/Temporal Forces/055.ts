import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
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