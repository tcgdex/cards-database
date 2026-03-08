import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillite"
	},

	illustrator: "Orca",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "Supposedly, this Pokémon was born from an\nicicle. It spews out freezing air at −58 degrees\nFahrenheit to make itself more comfortable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Chilly"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card