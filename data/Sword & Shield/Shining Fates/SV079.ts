import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Linéon de Galar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Zigzaton de Galar"
	},

	attacks: [{
		name: {
			fr: "Tranche-Nuit"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Enfoncement"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card