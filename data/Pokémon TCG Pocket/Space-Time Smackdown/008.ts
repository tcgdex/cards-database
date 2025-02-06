import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Roselia"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sting"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
