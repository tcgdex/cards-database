import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Zigzagoon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Swipes"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads."
		}
	}]
}

export default card