import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Chimchar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
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
