import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arrokuda"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [846],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It takes down prey by charging into them with\nits hard, pointed jaw. But Arrokuda's eyesight is\npoor, so this tactic has a low success rate."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Peck"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card