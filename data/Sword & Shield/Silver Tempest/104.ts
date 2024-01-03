import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		pt: "Golbat",
		de: "Golbat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	stage: "Stage1",

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

		damage: 30
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card