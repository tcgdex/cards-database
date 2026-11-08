import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [524],

	name: {
		'en-us': "Roggenrola"
	},

	illustrator: "Kanako Eo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "When it detects a noise, it starts to move.\nThe energy core inside it makes this Pokémon\nslightly warm to the touch."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mud-Slap"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card