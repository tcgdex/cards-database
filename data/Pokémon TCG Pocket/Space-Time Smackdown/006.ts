import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Yanma"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Its eyes can see 360 degrees without moving its head. It won't miss prey—even those behind it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
