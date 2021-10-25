import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "Megumi Higuchi",
	rarity: "None",
	category: "Pokemon",
	dexId: [131],
	hp: 130,
	types: ["Water"],

	description: {
		en: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			en: "Aqua Wash"
		},

		effect: {
			en: "You may put 2 Energy attached to your opponent's Active Pokémon into their hand."
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card