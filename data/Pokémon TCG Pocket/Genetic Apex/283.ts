import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mew"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psy Report"
		},

		effect: {
			en: "Your opponent reveals their hand."
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "Three Star"
}

export default card
