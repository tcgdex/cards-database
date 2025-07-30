import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
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

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			de: "Haken"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Minahamu",

	thirdParty: {
		cardmarket: 794282
	}
}

export default card
