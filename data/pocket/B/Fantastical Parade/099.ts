import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [264],

	name: {
		'en-us': "Galarian Linoone"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Galarian Zigzagoon"
	},

	description: {
		'en-us': "This very aggressive Pokémon will recklessly\nchallenge opponents stronger than itself."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Rear Kick"
		},

		damage: 40,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card