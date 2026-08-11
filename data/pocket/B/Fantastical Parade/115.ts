import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [597],

	name: {
		'en-us': "Ferroseed"
	},

	illustrator: "Satoshi Shirai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'en-us': "Mossy caves are their preferred dwellings.\nEnzymes contained in mosses help Ferroseed's\nspikes grow big and strong."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card