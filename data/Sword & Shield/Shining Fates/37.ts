import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Morpeko V"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Étincelle"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Électro Roue"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l’un de vos Pokémon de Banc."
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card