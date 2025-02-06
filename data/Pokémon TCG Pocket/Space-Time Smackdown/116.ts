import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzor"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "Ancient people believed that the pattern on Bronzor's back contained a mysterious power."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
