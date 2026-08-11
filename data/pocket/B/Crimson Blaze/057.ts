import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [233],

	name: {
		'en-us': "Porygon2"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon"
	},

	description: {
		'en-us': "This is a Porygon that was updated with special\ndata. Porygon2 develops itself by learning about\nmany different subjects all on its own."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Speed Attack"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card