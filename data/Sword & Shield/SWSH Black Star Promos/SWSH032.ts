import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card