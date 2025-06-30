import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Woobat"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "While inside a cave, if you look up and see lots\nof heart-shaped marks lining the walls, it's\nevidence that Woobat live there."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gust"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card