import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card