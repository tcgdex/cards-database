import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Hide in Shadows",
			fr: "Cachette d’Ombre"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card