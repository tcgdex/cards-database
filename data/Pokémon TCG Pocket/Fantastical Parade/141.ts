import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Furfrou"
	},

	illustrator: "Kariya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "Left alone, its fur will grow longer and longer,\nbut it will only allow someone it trusts to cut it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fur Coat"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In"
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