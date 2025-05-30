import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Tandemaus",
		fr: "Compagnol",
		de: "Zwieps",
		it: "Tandemaus",
		es: "Tandemaus",
		pt: "Tandemaus"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			it: "Rosicchiamento",
			es: "Roer",
			pt: "Roída"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card