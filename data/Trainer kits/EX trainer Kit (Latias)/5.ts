import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Numel"
	},

	illustrator: "Yuka Morii",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Firebreathing"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
		}
	}, {
		name: {
			en: "Tackle"
		},

		damage: 20
	}]
}

export default card