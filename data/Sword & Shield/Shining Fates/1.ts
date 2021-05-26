import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Yanma"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Charge"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			fr: "Cru-Ailes"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card