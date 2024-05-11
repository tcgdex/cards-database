import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillite",
		fr: "Sorbébé",
		es: "Vanillite",
		it: "Vanillite",
		pt: "Vanillite",
		de: "Gelatini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Chilly",
			fr: "Glacial",
			es: "Fresquito",
			it: "Addiaccio",
			pt: "Frio",
			de: "Frösteln"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card