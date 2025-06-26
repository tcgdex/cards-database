import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "Nelnal",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "A smart and kindhearted Pokémon,\nit glides across the surface of the sea while\nits beautiful song echoes around it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hydro Pump"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			en: "If this Pokémon has at least 3 extra {W} Energy attached, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card