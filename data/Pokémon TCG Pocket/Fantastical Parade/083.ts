import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Meditite"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It meditates to heighten its inner energy and to\nfloat in the air. It eats one berry a day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Smack"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card