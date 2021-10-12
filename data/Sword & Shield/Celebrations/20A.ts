import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Cleffa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
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

	retreat: 0
}

export default card