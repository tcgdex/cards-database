import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Zigzagoon"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Thought to be the oldest form of Zigzagoon,\nit moves in zigzags and wreaks havoc upon\nits surroundings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dig Claws"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card