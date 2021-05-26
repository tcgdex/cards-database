import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Flambino"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Flammèche"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card