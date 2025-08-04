import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Delibird"
	},

	illustrator: "Narumi Sato",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "It carries food all day long. There are tales about\nlost people who were saved by the food it had."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stumbling Draw"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card