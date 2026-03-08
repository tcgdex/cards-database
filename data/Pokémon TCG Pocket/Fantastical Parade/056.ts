import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tadbulb"
	},

	illustrator: "okayamatakatoshi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		en: "It floats using the electricity stored in its body.\nWhen thunderclouds are around, Tadbulb will\nfloat higher off the ground."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Charge"
		},

		cost: ["Colorless"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card