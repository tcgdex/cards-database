import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados"
	},

	illustrator: "Shinji Kanda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Spinarak"
	},

	description: {
		en: "Every night, it wanders around in search of\nprey, whose movements it restrains by spewing\nthreads before it bites into them with its fangs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bind Down"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card