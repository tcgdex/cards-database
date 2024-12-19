import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		en: "Linoone"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Seek Out"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward."
		}
	}, {
		name: {
			en: "Continuous Headbutt"
		},

		damage: "40×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads."
		}
	}],

	evolveFrom: {
		en: "Zigzagoon",
		fr: "Zigzaton",
		es: "Zigzagoon",
		it: "Zigzagoon",
		pt: "Zigzagoon",
		de: "Zigzachs"
	}
}

export default card