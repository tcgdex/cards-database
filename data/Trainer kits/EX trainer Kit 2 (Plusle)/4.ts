import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	set: Set,

	name: {
		en: "Meowth"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		name: {
			en: "Cat Kick"
		},

		damage: 20
	}]
}

export default card