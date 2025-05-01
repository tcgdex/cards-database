import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wishiwashi ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "School Storm"
		},

		damage: "30+",
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "This attack does 40 more damage for each of your Benched Wishiwashi and Wishiwashi ex."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card
