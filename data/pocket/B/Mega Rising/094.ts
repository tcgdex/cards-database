import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dedenne"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [702],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "Dedenne emit electrical waves from the whiskers\non their cheeks to communicate with each other.\nWhen low on electricity, they curl up and sleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Electric Nibbling"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			'en-us': "Discard a {L} Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card