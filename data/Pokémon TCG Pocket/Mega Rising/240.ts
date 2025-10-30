import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita"
	},

	illustrator: "Koji Nakata",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It toughens up by slamming into thick trees\nover and over. It gains a sturdy body and\ndauntless spirit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Lunge Out"
		},

		damage: 50,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card