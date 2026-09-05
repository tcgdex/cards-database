import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Zubat"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		en: "It emits ultrasonic waves from its mouth to check\nits surroundings. Even in tight caves, Zubat flies\naround with skill."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card