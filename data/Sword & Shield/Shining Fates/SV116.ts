import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Morsure"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Poing Piquant"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card