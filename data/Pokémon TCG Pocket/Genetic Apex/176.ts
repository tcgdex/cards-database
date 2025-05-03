import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Koffing"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Suffocating Gas"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
	}
}

export default card
