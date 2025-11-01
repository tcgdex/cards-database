import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals.",
		fr: "Les éléments présents dans les gemmes qu'il mange remontent à la surface de son corps, formant des motifs d'une infinie variété."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card