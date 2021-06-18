import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Cobalion",
		fr: "Cobaltium"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Headbang",
			fr: "Frappe de Tête"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			en: "Metal Slash",
			fr: "Tranche Métallique"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card