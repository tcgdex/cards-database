import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [676],

	name: {
		'en-us': "Furfrou"
	},

	illustrator: "Kariya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'en-us': "Left alone, its fur will grow longer and longer,\nbut it will only allow someone it trusts to cut it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fur Coat"
		},

		effect: {
			'en-us': "This Pokémon takes −20 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hammer In"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card