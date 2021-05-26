import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Efflèche"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		fr: "Brindibou"
	},

	attacks: [{
		name: {
			fr: "Tranch’Herbe"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card