import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [191],

	name: {
		'en-us': "Sunkern"
	},

	illustrator: "Saboteri",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "It is very weak. Its only means of defense is to\nshake its leaves desperately at its attacker."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Seed Bomb"
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