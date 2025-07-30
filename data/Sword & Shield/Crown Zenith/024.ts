import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
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
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691741
	}
}

export default card