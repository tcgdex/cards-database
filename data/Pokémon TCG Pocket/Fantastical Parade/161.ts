import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio"
	},

	illustrator: "0313",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "This form of Oricorio has sipped red nectar. It whips up\nblazing flames as it moves to the steps of its passionate dance."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Inspiring Dance"
		},

		damage: 10,
		cost: ["Fire"],

		effect: {
			en: "During your next turn, attacks used by your Pokémon do +20 damage to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card