import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Jab"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
	}
}

export default card
