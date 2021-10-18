import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Torchic"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Firebreathing"
		},

		damage: "20+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
		}
	}]
}

export default card