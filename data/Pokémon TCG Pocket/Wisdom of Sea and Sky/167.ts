import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Totodile",
		fr: "Kaiminus"
	},

	illustrator: "Ayako Ozaki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [158],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is small but rough and tough. It won't hesitate to\ntake a bite out of anything that moves.",
		fr: "Petit mais costaud, il n'hésite pas à mordre tout ce qui passe à portée de dents."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card