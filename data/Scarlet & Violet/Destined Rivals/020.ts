import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Smoliv",
		fr: "Olivini",
		de: "Olini",
		it: "Smoliv",
		es: "Smoliv",
		pt: "Smoliv"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card