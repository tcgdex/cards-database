import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		fr: "Magnéton",
		en: "Magneton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Boule Élek",
			en: "Electro Ball",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card