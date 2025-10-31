import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Bergmite"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "They live in mountainous regions of frigid cold.\nOn rare occasions, they ride on the back of an\nAvalugg to cross seas and move to new habitats."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Icicle"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card