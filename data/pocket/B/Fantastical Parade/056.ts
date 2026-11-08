import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [938],

	name: {
		'en-us': "Tadbulb"
	},

	illustrator: "okayamatakatoshi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'en-us': "It floats using the electricity stored in its body.\nWhen thunderclouds are around, Tadbulb will\nfloat higher off the ground."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Charge"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card