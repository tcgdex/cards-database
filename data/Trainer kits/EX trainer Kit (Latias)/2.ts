import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Combusken"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flare"
		},

		damage: 20
	}, {
		name: {
			en: "Double Kick"
		},

		damage: "40×",

		effect: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads."
		}
	}]
}

export default card