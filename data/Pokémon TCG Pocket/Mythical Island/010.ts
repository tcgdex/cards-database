import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stomp"
		},

		damage: "10+",
		cost: ["Fire"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
