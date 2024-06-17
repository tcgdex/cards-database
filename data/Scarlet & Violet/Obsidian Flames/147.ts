import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		fr: "Minotaupe",
		en: "Excadrill",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Transpercement",
			en: "Pierce",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card