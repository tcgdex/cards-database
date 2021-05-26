import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Khélocrok"
	},

	illustrator: "otumami",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Morsure"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Pistolet à O"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card