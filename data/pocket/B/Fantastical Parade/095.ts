import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [53],

	name: {
		'en-us': "Alolan Persian"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Alolan Meowth"
	},

	description: {
		'en-us': "This Pokémon is one tough opponent. Not only\ndoes it have formidable physical abilities, but it's\nalso not above fighting dirty."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite"
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