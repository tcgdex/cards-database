import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card