import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		fr: "Gourmelet",
		en: "Lechonk",
		es: "Lechonk",
		it: "Lechonk",
		pt: "Lechonk",
		de: "Ferkuli"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Narumi Sato"
}

export default card