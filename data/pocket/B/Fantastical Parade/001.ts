import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [165],

	name: {
		'en-us': "Ledyba"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "These very cowardly Pokémon join together and\nuse Reflect to protect their nest."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Punch"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card