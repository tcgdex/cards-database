import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Crèmy"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Aromathérapie"
		},

		effect: {
			fr: "Soignez 10 dégâts de chacun de vos Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Charge"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card