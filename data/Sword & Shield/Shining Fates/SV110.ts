import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lokhlass V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Body Surf"
		},

		effect: {
			fr: "Attachez une carte Énergie Water de votre main à ce Pokémon. Dans ce cas, échangez-le contre l’un de vos Pokémon de Banc."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Boucle Océanique"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon."
		},

		damage: 210,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card