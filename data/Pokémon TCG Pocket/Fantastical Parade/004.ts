import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Roselia"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It uses the different poisons in each hand\nseparately when it attacks. The stronger its\naroma, the healthier it is."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Trip Over"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card