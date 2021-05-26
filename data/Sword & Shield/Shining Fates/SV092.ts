import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Duralugon"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			fr: "Affuteur de Métal"
		},

		effect: {
			fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
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