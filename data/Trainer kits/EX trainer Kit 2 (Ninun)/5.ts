import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Ninun)'

const card: Card = {
	set: Set,

	name: {
		en: "Mareep"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Minor Errand-Running"
		},

		effect: {
			en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
		}
	}, {
		name: {
			en: "Quick Attack"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
		}
	}]
}

export default card