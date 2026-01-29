import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Meowth"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "These daring Pokémon have coins on their\nforeheads. Darker coins are harder, and harder\ncoins garner more respect among Meowth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card