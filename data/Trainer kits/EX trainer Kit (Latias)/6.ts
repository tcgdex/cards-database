import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		en: "Skitty"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 10
	}, {
		name: {
			en: "Lunge"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}]
}

export default card