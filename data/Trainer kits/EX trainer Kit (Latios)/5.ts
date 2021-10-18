import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Magneton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ram"
		},

		damage: 20
	}, {
		name: {
			en: "Triple Smash"
		},

		damage: "20+",

		effect: {
			en: "Flip 3 coins. This attack does 20 damage plus 20 more damage for each heads."
		}
	}]
}

export default card