import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Circle Circuit"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched L Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Star"
}

export default card
