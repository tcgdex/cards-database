import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonchan ex"
	},

	illustrator: "nagimiso",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Quick Straight"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			en: "This attack's damage isn't affected by Weakness."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card