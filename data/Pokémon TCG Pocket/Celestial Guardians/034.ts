import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio"
	},

	illustrator: "Jerky",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "This form of Oricorio has sipped red nectar. It whips up blazing flames as it moves to the steps of its passionate dance."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Kindle"
		},

		damage: 40,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard a random Energy from both Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card