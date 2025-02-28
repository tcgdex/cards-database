import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Pupitar"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Larvitar"
	},

	description: {
		en: "Its shell is as hard as bedrock, and it is also very<br />strong. Its thrashing can topple a mountain."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Speed Attack"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card