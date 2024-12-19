import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [70],
	set: Set,

	name: {
		fr: "Boustiflor",
		en: "Weepinbell",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Coupe",
			en: "Cut",
			es: "Corte",
			it: "Taglio",
			pt: "Cortar",
			de: "Zerschneider"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Fluide Éclaboussant",
			en: "Spray Fluid",
			es: "Fluido Rociado",
			it: "Fluidospray",
			pt: "Fluido Spray",
			de: "Sprühwasser"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
		es: "Bellsprout",
		it: "Bellsprout",
		pt: "Bellsprout",
		de: "Knofensa"
	}
}

export default card