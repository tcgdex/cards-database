import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [808],
	set: Set,

	name: {
		fr: "Meltan",
		en: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Dissolution",
			en: "Melt",
			es: "Derretir",
			it: "Liquefazione",
			pt: "Derreter",
			de: "Schmelzen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Nobuhiro Imagawa",

	thirdParty: {
		cardmarket: 725232
	}
}

export default card