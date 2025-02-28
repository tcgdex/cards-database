import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Clobbopus"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Knuckle Punch"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It's very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.",
	}
}

export default card
