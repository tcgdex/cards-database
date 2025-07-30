import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682150
	}
}

export default card