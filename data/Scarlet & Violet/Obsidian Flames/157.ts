import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [147],
	set: Set,

	name: {
		fr: "Minidraco",
		en: "Dratini",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Coud'Queue Sec",
			en: "Tail Snap",
			es: "Pinza Cola",
			it: "Schioccacoda",
			pt: "Surpresa de Cauda",
			de: "Schweifhieb"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card