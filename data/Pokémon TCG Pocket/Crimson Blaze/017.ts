import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Squirtle"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Whap"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card