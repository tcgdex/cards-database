import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Rayquaza"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "It lives in the ozone layer far above the clouds and cannot be seen from the ground."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiral Rush"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card