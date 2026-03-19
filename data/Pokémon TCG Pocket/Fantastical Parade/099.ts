import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Linoone"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Zigzagoon"
	},

	description: {
		en: "This very aggressive Pokémon will recklessly\nchallenge opponents stronger than itself."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rear Kick"
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