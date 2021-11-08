import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Ninun)'

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "Ken Sugimori",
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
			en: "Heat Tackle"
		},

		damage: 70,

		effect: {
			en: "Arcanine does 10 damage to itself."
		}
	}]
}

export default card