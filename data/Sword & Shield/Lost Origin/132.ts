import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [704],
	set: Set,

	name: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		it: "Goomy",
		pt: "Goomy",
		de: "Viscora"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Water", "Metal"],

		name: {
			en: "Melt",
			fr: "Dissolution",
			es: "Derretir",
			it: "Liquefazione",
			pt: "Derreter",
			de: "Schmelzen"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card