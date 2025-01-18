import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		pt: "Dreepy",
		it: "Dreepy",
		de: "Grolldra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			pt: "Rancinho",
			it: "Rancormeschino",
			de: "Mini-Groll"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso",
			de: "Biss"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card