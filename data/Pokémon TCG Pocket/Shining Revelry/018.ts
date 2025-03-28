import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Wiglett"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spring Out"
		},

		cost: ["Water"],

		effect: {
			en: "1 of your opponent's Pokémon is chosen at random. Do 30 damage to it."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card