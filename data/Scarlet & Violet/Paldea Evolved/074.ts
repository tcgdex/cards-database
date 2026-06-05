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

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "sowsow",

	description: {
		en: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
	},

	thirdParty: {
		cardmarket: 715549
	}
}

export default card