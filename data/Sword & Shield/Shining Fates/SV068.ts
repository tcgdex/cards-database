import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wagomine"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Charbi"
	},

	attacks: [{
		name: {
			fr: "Collision"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Tacle Feu"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card