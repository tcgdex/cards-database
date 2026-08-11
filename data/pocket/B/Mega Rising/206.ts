import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Furfrou"
	},

	illustrator: "Teeziro",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [676],
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
			'en-us': "Sharp Fang"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card