import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Starly",
		fr: "Étourmi",
		de: "Staralili",
		it: "Starly",
		es: "Starly",
		pt: "Starly"
	},

	illustrator: "saino misaki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			de: "Flattern",
			it: "Alabattito",
			es: "Aleteo",
			pt: "Asa"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card