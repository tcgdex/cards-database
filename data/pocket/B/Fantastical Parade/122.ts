import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [372],

	name: {
		'en-us': "Shelgon"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Bagon"
	},

	description: {
		'en-us': "Its armored body makes all attacks bounce off.\nThe armor is too tough, however, making it heavy\nand somewhat sluggish."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Rolling Tackle"
		},

		damage: 60,
		cost: ["Fire", "Water"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 3
}

export default card