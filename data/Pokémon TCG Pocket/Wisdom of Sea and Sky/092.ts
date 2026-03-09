import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [95],
	hp: 100,
	types: ["Fighting"],

	description: {
		en: "As it digs through the ground, it absorbs many\nhard objects. This is what makes its body so solid.",
		fr: "Il absorbe des éléments solides en creusant le sol, ce qui le rend plus robuste."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card