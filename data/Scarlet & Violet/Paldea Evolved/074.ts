import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		fr: "Pohm",
		en: "Pawmi",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		de: "Pamo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Choc Statique",
			en: "Static Shock",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715549,
				tcgplayer: 497485,
				cardtrader: 248701
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715549,
				tcgplayer: 497485,
				cardtrader: 248701
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
