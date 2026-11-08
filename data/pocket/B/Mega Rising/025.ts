import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grookey"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [810],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It attacks with rapid beats of its stick.\nAs it strikes with amazing speed, it gets\nmore and more pumped."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card