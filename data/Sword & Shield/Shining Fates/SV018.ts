import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Grillepattes"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Morsure"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Fournaise"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card