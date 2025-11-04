import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Bellsprout"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Even though its body is extremely skinny, it is\nblindingly fast when catching its prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card