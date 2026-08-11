import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [668],

	name: {
		'en-us': "Pyroar"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litleo"
	},

	description: {
		'en-us': "The females of a pride work together to bring\ndown prey. It's thanks to them that their pride\ndoesn't starve."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heat Blast"
		},

		damage: 70,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card