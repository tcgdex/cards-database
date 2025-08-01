import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		en: "It spouts poison spores from the top of its head. These spores cause pain all over if inhaled."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			pt: "Investida",
			it: "Azione"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			de: "Samenbomben",
			es: "Bomba Germen",
			pt: "Bomba de Sementes",
			it: "Semebomba"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582032
	}
}

export default card