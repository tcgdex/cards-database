import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card