import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzor"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "Ancient people believed that the pattern on<br />Bronzor's back contained a mysterious power."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card