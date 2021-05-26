import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Grimalin"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Bataille"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Ruée"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card