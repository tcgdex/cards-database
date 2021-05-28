import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Linéon de Galar",
		en: "Galarian Linoone"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Zigzaton de Galar",
		en: "Galarian Zigzagoon"
	},

	attacks: [{
		name: {
			fr: "Tranche-Nuit",
			en: "Night Slash"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Enfoncement",
			en: "Hammer In"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card