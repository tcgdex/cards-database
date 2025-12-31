import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Snubbull",
		fr: "Snubbull"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It grows close to others easily and is also easily\nspoiled. The disparity between its face and its\nactions makes many young people wild about it.",
		fr: "Il s'attache très facilement et aime être cajolé. Une telle sensibilité cachée derrière une mine renfrognée fait fondre beaucoup de jeunes gens."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card