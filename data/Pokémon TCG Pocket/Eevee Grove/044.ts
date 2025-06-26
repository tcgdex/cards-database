import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
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