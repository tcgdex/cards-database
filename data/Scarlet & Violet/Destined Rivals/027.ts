import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano",
		it: "Growlithe",
		es: "Growlithe",
		pt: "Growlithe"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			de: "Glühende Kohlen",
			it: "Carboni Ardenti",
			es: "Carbón Activado",
			pt: "Carvão Vivo"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			de: "Schaufelkrallen",
			it: "Scavazanne",
			es: "Hundir Garras",
			pt: "Fincar Garras"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card