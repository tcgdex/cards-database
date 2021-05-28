import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cacturne",
		fr: "Cacturne"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea"
	},

	attacks: [{
		name: {
			en: "Pull",
			fr: "Tirer"
		},

		effect: {
			en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Spiny Punch",
			fr: "Frappe Épineuse"
		},

		effect: {
			en: "If this Pokémon has any Darkness Energy attached, this attack does 70 more damage.",
			fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires."
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card