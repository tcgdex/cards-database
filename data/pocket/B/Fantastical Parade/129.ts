import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [162],

	name: {
		'en-us': "Furret"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Sentret"
	},

	description: {
		'en-us': "It is nimble and has a very flexible body.\nEven if you get ahold of it, it'll slip right out\nof your arms."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Headbutt Bounce"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card