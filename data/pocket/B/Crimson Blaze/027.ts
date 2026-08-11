import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [587],

	name: {
		'en-us': "Emolga"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "This Pokémon absolutely loves sweet berries.\nSometimes it stuffs its cheeks full of so much\nfood that it can't fly properly."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mach Bolt"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card