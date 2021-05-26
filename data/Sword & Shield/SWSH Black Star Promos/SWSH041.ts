import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Flareon",
		fr: "Pyroli"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	attacks: [{
		name: {
			en: "Singe",
			fr: "Roussi"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Kindle",
			fr: "Enflammer"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card