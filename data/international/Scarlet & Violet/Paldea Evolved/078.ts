import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		fr: "Têtampoule",
		en: "Tadbulb",
		es: "Tadbulb",
		it: "Tadbulb",
		pt: "Tadbulb",
		de: "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			fr: "Choc Statique",
			en: "Static Shock",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715553,
				tcgplayer: 497489,
				cardtrader: 248705
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715553,
				tcgplayer: 497489,
				cardtrader: 248705
			}
		},
	],

	illustrator: "Tika Matsuno",

	description: {
		en: "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
	},
}

export default card
