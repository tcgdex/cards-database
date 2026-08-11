import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heatmor"
	},

	illustrator: "Satoshi Shirai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [631],
	hp: 80,
	types: ["Fire"],

	description: {
		'en-us': "A flame serves as its tongue, melting through the\nhard shell of Durant so that Heatmor can devour\ntheir insides."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tongue Whip"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card