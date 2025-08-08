import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mina Nakai",

	description: {
		en: "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card