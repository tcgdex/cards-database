import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		en: "Cleffa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Eeeeeeek"
		},

		effect: {
			en: "Shuffle your hand into your deck, then draw 7 cards."
		},

		cost: ["Colorless"]
	}],

	retreat: 0,

	description: {
		en: "Because of its unusual, star-like silhouette, people believe that it came here on a meteor."
	},

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
