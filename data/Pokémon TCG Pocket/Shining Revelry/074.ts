import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Buizel"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "It inflates its flotation sac, keeping its face above water in order to watch for prey movement."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card