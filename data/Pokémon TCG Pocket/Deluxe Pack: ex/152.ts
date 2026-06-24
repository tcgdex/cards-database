import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly"
	},

	illustrator: "Masako Yamashita",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It wraps its opponent in its gas-like body,\nslowly weakening its prey by poisoning it\nthrough the skin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Suffocating Gas"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card