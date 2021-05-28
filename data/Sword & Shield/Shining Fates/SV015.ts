import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Flambino",
		en: "Scorbunny"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Flammèche",
			en: "Ember"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon."
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