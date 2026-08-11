import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [53],

	name: {
		'en-us': "Persian"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Meowth"
	},

	description: {
		'en-us': "It has a vicious temperament. Beware if it raises\nits tail straight up. This is a signal that it is about\nto pounce and bite."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card