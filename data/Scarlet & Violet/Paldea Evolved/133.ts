import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Farfuret",
		en: "Sneasel",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Creusogriffes",
			en: "Dig Claws",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			de: "Schaufelkrallen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card