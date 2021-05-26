import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon",
		fr: "Duralugon"
	},

	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Metal Sharpener",
			fr: "Affuteur de Métal"
		},

		effect: {
			en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Power Beam",
			fr: "Puissant Rayon"
		},

		damage: 110,
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

	retreat: 2
}

export default card