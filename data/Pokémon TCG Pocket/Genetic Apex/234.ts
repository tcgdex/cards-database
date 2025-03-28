import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "If this Pokémon has at least 3 extra W Energy attached, this attack does 70 more damage."
		},

		damage: "20+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star",

	description: {
		en: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
	}
}

export default card
