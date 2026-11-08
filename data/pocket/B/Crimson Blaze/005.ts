import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [167],

	name: {
		'en-us': "Spinarak"
	},

	illustrator: "kodama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "Although the poison from its fangs isn't that\nstrong, it's potent enough to weaken prey that\ngets caught in its web."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sting"
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